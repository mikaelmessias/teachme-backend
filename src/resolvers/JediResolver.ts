import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { BookingEntity } from 'src/database/entity/BookingEntity';
import RepoService from 'src/repo.service';
import { JediEntity } from '../database/entity/JediEntity';
import { CreateJediInput } from './input/Jedi/CreateJediInput';
import { UpdateJediInput } from './input/Jedi/UpdateJediInput';

@Resolver(JediEntity)
export class JediResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => JediEntity)
  jedi_create(@Args('jedi') input: CreateJediInput) {
    const jedi = this.repo.jedi.create(input);

    return this.repo.jedi.save(jedi);
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
  jedi_list_single(@Args('id') id: number) {
    return this.repo.jedi.findOne(id);
  }

  @ResolveField()
  availability(@Parent() parent: JediEntity) {
    return this.repo.jediAvailability.find({
      where: { jediId: parent.id },
    });
  }

  @ResolveField()
  skills(@Parent() parent: JediEntity) {
    return this.repo.jediSkill.find({
      where: { jediId: parent.id },
    });
  }

  @ResolveProperty(() => [BookingEntity])
  bookings(@Parent() parent: JediEntity) {
    return this.repo.booking.find({
      where: { jediId: parent.id },
    });
  }
}
