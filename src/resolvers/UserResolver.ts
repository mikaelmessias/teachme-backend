import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BookingEntity } from 'src/database/entity/BookingEntity';
import { UserEntity } from 'src/database/entity/UserEntity';
import RepoService from 'src/repo.service';
import { UserTypeEnum } from 'src/utils/enum/UserTypeEnum';
import { CreateUserInput } from './input/User/CreateUserInput';
import { UpdateUserInput } from './input/User/UpdateUserInput';
import { UserLoginInput } from './input/User/UserLoginInput';

@Resolver(UserEntity)
export class UserResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => UserEntity)
  user_create(@Args('user') input: CreateUserInput) {
    const user = this.repo.user.create(input);

    return this.repo.user.save(user);
  }

  @Mutation(() => UserEntity)
  async user_update(@Args('user') input: UpdateUserInput) {
    const { id, ...updatedPadawan } = input;

    await this.repo.user.update(id, updatedPadawan);

    return this.repo.user.findOne(id);
  }

  @Mutation(() => Boolean)
  async user_delete_single(@Args('id') id: number) {
    const deleteResult = await this.repo.user.delete(id);

    return deleteResult.affected > 0;
  }

  @Query(() => [UserEntity])
  user_list_all() {
    return this.repo.user.find();
  }

  @Query(() => UserEntity, { nullable: true })
  user_list_single(@Args('id') id: number) {
    return this.repo.user.findOne(id);
  }

  @Query(() => UserEntity, { nullable: true })
  async user_login(@Args('login') input: UserLoginInput) {
    const { email, password } = input;

    const users = await this.repo.user.find({
      where: { email, password },
    });

    if (users.length) {
      return users[0];
    }
  }

  @ResolveField(() => [BookingEntity])
  bookings(@Parent() parent: UserEntity) {
    if (parent.userType === UserTypeEnum.JEDI) {
      return this.repo.booking.find({
        where: { jediId: parent.id },
      });
    } else {
      return this.repo.booking.find({
        where: { padawanId: parent.id },
      });
    }
  }

  @ResolveField()
  availability(@Parent() parent: UserEntity) {
    return this.repo.jediAvailability.find({
      where: { jediId: parent.id },
    });
  }

  @ResolveField()
  skills(@Parent() parent: UserEntity) {
    return this.repo.jediSkill.find({
      where: { jediId: parent.id },
    });
  }
}
