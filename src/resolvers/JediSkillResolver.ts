import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { JediSkillEntity } from 'src/database/entity/JediSkillEntity';
import { UserEntity } from 'src/database/entity/UserEntity';
import RepoService from 'src/repo.service';
import { CreateJediSkillInput } from './input/JediSkill/CreateJediSkillInput';
import { DeleteJediSkillInput } from './input/JediSkill/DeleteJediSkillInput';

@Resolver(JediSkillEntity)
export class JediSkillResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => UserEntity)
  async jedi_skill_create(@Args('jediSkill') input: CreateJediSkillInput) {
    const { jediId, price, techId } = input;

    const jediSkill = this.repo.jediSkill.create({
      id: `JEDI_${jediId}_TECH_${techId}`,
      price,
      jediId,
      techId,
    });

    await this.repo.jediSkill.save(jediSkill);

    return await this.repo.user.findOne(jediId);
  }

  @Mutation(() => UserEntity)
  async jedi_skill_delete_single(
    @Args('jediSkill') jediSkill: DeleteJediSkillInput,
  ) {
    const { jediId, techId } = jediSkill;

    const id = `JEDI_${jediId}_TECH_${techId}`;

    this.repo.jediSkill.delete({ id });

    return await this.repo.user.findOne(jediId);
  }

  @ResolveField()
  async jedi(@Parent() parent: JediSkillEntity) {
    return this.repo.user.findOne(parent.jediId);
  }

  @ResolveField()
  async tech(@Parent() parent: JediSkillEntity) {
    return this.repo.tech.findOne(parent.techId);
  }
}
