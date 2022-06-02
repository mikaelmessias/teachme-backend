import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateJediInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  cpf: string;

  @Field({ nullable: true })
  birthdate?: number;

  @Field({ nullable: true })
  biography: string;

  @Field({ nullable: true })
  avatar?: string;
}
