import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import RepoService from 'src/repo.service';
import { TechEntity } from '../database/entity/TechEntity';
import { CreateTechInput } from './input/Tech/CreateTechInput';
import { UpdateTechInput } from './input/Tech/UpdateTechInput';

@Resolver(TechEntity)
export class TechResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => TechEntity)
  public async tech_create(@Args('tech') input: CreateTechInput) {
    const { title, thumbnail } = input;

    const tech = this.repo.tech.create({
      title: title,
      thumbnail: thumbnail,
    });

    return await this.repo.tech.save(tech);
  }

  @Mutation(() => TechEntity)
  public async tech_update(@Args('tech') input: UpdateTechInput) {
    const { id, thumbnail } = input;

    await this.repo.tech.update(id, { thumbnail });

    return this.repo.tech.findOne(id);
  }

  @Mutation(() => Boolean)
  public async tech_delete_single(@Args('id') id: number) {
    const deleteResult = await this.repo.tech.delete(id);

    return deleteResult.affected > 0;
  }

  @Mutation(() => [TechEntity], { nullable: true })
  public async tech_delete_all() {
    const techs = await this.repo.tech.find();

    return await this.repo.tech.remove(techs);
  }

  @Query(() => [TechEntity])
  public async tech_list_all() {
    return this.repo.tech.find();
  }

  @Query(() => TechEntity, { nullable: true })
  public async tech_list_single(@Args('id') id: number) {
    return this.repo.tech.findOne(id);
  }

  @Query(() => [TechEntity])
  public async tech_list_by_title(@Args('title') title: string) {
    const techs = await this.repo.tech
      .createQueryBuilder('techs')
      .where('techs.title like :tech', { tech: '%' + title + '%' })
      .getMany();

    return techs;
  }

  @ResolveField()
  async skills(@Parent() parent: TechEntity) {
    return this.repo.jediSkill.find({ where: { techId: parent.id } });
  }
}
