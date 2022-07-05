import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { JediAvailabilityEntity } from 'src/database/entity/JediAvailabilityEntity';
import { UserEntity } from 'src/database/entity/UserEntity';
import RepoService from 'src/repo.service';
import { CreateJediAvailabilityInput } from './input/JediAvailability/CreateJediAvailabilityInput';

@Resolver(JediAvailabilityEntity)
export class JediAvailabilityResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => UserEntity)
  async jedi_availability_update(
    @Args('jediAvailability') input: CreateJediAvailabilityInput,
  ) {
    const { jediId, days } = input;

    await this.repo.jediAvailability
      .createQueryBuilder()
      .delete()
      .from(JediAvailabilityEntity)
      .where('jediId = :jediId', { jediId })
      .andWhere('day NOT IN (:...days)', { days })
      .execute();

    await this.repo.jediAvailability
      .createQueryBuilder()
      .insert()
      .into(JediAvailabilityEntity)
      .values(
        days.map((day) => ({
          id: `${jediId}_${day}`,
          jediId,
          day,
        })),
      )
      .orIgnore(`("id") DO NOTHING`)
      .execute();

    return await this.repo.user.findOne(jediId);
  }
}
