import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TechEntity } from '../database/entity/TechEntity';
import { TechService } from '../services/TechService';
import { CreateTechInput } from './input/Tech/CreateTechInput';
import { UpdateTechInput } from './input/Tech/UpdateTechInput';

/**
 * O resolver irá lidar com as queries e parâmetros, repassando aos respectivos
 * services para manipulação dos dados.
 */
@Resolver()
export class TechResolver {
  constructor(private readonly techService: TechService) {}

  @Mutation(() => TechEntity)
  public async tech_create(@Args('tech') input: CreateTechInput) {
    const { title, thumbnail } = input;
    return this.techService.create(title, thumbnail);
  }

  @Mutation(() => TechEntity)
  public async tech_update(@Args('tech') input: UpdateTechInput) {
    const { id, thumbnail } = input;

    return await this.techService.updateThumbnail(id, thumbnail);
  }

  @Mutation(() => Boolean)
  public async tech_delete_single(@Args('id') id: number) {
    const deleteResult = await this.techService.delete(id);

    return deleteResult.affected > 0;
  }

  @Mutation(() => [TechEntity], { nullable: true })
  public async tech_delete_all() {
    return await this.techService.deleteAll();
  }

  @Query(() => [TechEntity])
  public async tech_list_all() {
    return this.techService.findAll();
  }

  @Query(() => TechEntity, { nullable: true })
  public async tech_list_single(@Args('id') id: number) {
    return this.techService.findOne(id);
  }
}
