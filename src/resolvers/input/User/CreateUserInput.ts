import { Field, InputType } from '@nestjs/graphql';
import { UserTypeEnum } from 'src/utils/enum/UserTypeEnum';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  cpf: string;

  @Field(() => UserTypeEnum)
  userType: UserTypeEnum;

  @Field({ nullable: true })
  birthdate?: number;

  @Field({ nullable: true })
  biography: string;

  @Field({ nullable: true })
  avatar?: string;
}
