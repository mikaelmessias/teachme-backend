import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import RepoService from 'src/repo.service';
import { JediEntity } from '../database/entity/JediEntity';
import { CreateJediInput } from './input/Jedi/CreateJediInput';
import { UpdateJediInput } from './input/Jedi/UpdateJediInput';

@Resolver(JediEntity)
export class JediResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => JediEntity)
  async jedi_create(@Args('jedi') input: CreateJediInput) {
    const jedi = this.repo.jedi.create(input);

    return await this.repo.jedi.save(jedi);
  }

  @Mutation(() => JediEntity)
  async jedi_update(@Args('jedi') input: UpdateJediInput) {
    const { id, ...updatedJedi } = input;

    await this.repo.jedi.update(id, updatedJedi);

    return this.repo.jedi.findOne(id);
  }

  @Mutation(() => Boolean)
  async jedi_delete_single(@Args('id') id: number) {
    const deleteResult = await this.repo.jedi.delete(id);

    return deleteResult.affected > 0;
  }

  @Query(() => [JediEntity])
  async jedi_list_all() {
    return this.repo.jedi.find();
  }

  @Query(() => JediEntity, { nullable: true })
  async jedi_list_single(@Args('id') id: number) {
    const jedi = await this.repo.jedi.findOne(id);
    const jediAvailabilities = jedi.availability;

    return { ...jedi, availability: jediAvailabilities };
  }

  @ResolveField()
  async availability(@Parent() parent) {
    return await this.repo.jediAvailability.find({
      where: { jediId: parent.id },
    });
  }

  @ResolveField()
  async skills(@Parent() parent) {
    return await this.repo.jediSkill.find({
      where: { jediId: parent.id },
    });
  }
}
