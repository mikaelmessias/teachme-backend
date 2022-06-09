import {
  Query,
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { JediSkillEntity } from 'src/database/entity/JediSkill';
import { TechEntity } from 'src/database/entity/TechEntity';
import RepoService from 'src/repo.service';
import { CreateJediSkillInput } from './input/JediSkill/CreateJediSkillInput';

@Resolver(JediSkillEntity)
export class JediSkillResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => JediSkillEntity)
  public async jedi_skill_create(
    @Args('jediSkill') input: CreateJediSkillInput,
  ) {
    const { jediId, price, techId } = input;

    const isCreated = await this.repo.jediSkill.findOne({
      where: { jediId, techId },
    });

    if (isCreated) {
      return;
    }

    const jediSkill = this.repo.jediSkill.create({
      price,
      jediId,
      techId,
    });

    return this.repo.jediSkill.save(jediSkill);
  }

  @Query(() => JediSkillEntity)
  public async jedi_skill_by_jedi_id(@Args('jediId') jediId: number) {
    return await this.repo.jediSkill.findOne({
      where: { jediId },
    });
  }

  @ResolveField()
  public async jedi(@Parent() parent: JediSkillEntity) {
    return this.repo.jedi.findOne(parent.jediId);
  }

  @ResolveField()
  public async tech(@Parent() parent: JediSkillEntity) {
    return this.repo.tech.findOne(parent.techId);
  }
}
