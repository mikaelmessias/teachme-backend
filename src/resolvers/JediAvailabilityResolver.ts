import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { JediAvailabilityEntity } from 'src/database/entity/JediAvailability';
import RepoService from 'src/repo.service';
import { CreateJediAvailabilityInput } from './input/JediAvailability/CreateJediAvailabilityInput';

@Resolver(JediAvailabilityEntity)
export class JediAvailabilityResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => [JediAvailabilityEntity])
  async jedi_availability_create(
    @Args('jediAvailability') input: CreateJediAvailabilityInput,
  ) {
    const { jediId, days } = input;
    const jediAvailabilities: JediAvailabilityEntity[] = [];

    days.forEach(async (day) => {
      const isCreated = await this.repo.jediAvailability.findOne({
        where: { jedi: { id: jediId }, day },
      });

      if (isCreated) {
        return;
      }

      const jediAvailability = this.repo.jediAvailability.create({
        day,
        jediId,
      });

      this.repo.jediAvailability.save(jediAvailability);

      jediAvailabilities.push(jediAvailability);
    });

    return jediAvailabilities;
  }

  @Mutation(() => Boolean)
  async jedi_availability_delete_single(@Args('id') id: number) {
    const deleteResult = await this.repo.jediAvailability.delete(id);

    return deleteResult.affected > 0;
  }

  @Query(() => [JediAvailabilityEntity])
  async jedi_availability_list_all() {
    return await this.repo.jediAvailability.find();
  }

  @Query(() => [JediAvailabilityEntity], { nullable: true })
  async jedi_availability_list_single(@Args('id') id: number) {
    return await this.repo.jediAvailability.findOne(id);
  }

  @Query(() => [JediAvailabilityEntity], { nullable: true })
  async jedi_availability_list_by_jedi_id(@Args('jediId') jediId: number) {
    return await this.repo.jediAvailability.find({
      where: { jedi: { id: jediId } },
    });
  }

  @ResolveProperty()
  async jedi(@Parent() parent) {
    return this.repo.jedi.findOne(parent.jediId);
  }
}
