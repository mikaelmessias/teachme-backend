import { TechEntity } from 'src/database/entity/TechEntity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTechInput } from './input/Tech/CreateTechInput';
import { UpdateTechInput } from './input/Tech/UpdateTechInput';
import { TechService } from 'src/services/TechService';

/**
 * O resolver irá lidar com as queries e parâmetros, repassando aos respectivos
 * services para manipulação dos dados.
 */
@Resolver()
export class TechResolver {
  constructor(private readonly techService: TechService) {}

  @Query(() => [TechEntity])
  public async techs() {
    return this.techService.findAll();
  }

  @Query(() => TechEntity, { nullable: true })
  public async tech(@Args('id') id: number) {
    return this.techService.findOne(id);
  }

  @Mutation(() => TechEntity)
  public async createTech(@Args('tech') input: CreateTechInput) {
    const { title, thumbnail } = input;
    return this.techService.create(title, thumbnail);
  }

  @Mutation(() => TechEntity)
  public async updateTech(@Args('tech') input: UpdateTechInput) {
    const { id, thumbnail } = input;

    return await this.techService.updateThumbnail(id, thumbnail);
  }

  @Mutation(() => Boolean)
  public async deleteTech(@Args('id') id: number) {
    const deleteResult = await this.techService.delete(id);

    return deleteResult.affected > 0;
  }

  @Mutation(() => [TechEntity], { nullable: true })
  public async deleteAllTechs() {
    return await this.techService.deleteAll();
  }
}
