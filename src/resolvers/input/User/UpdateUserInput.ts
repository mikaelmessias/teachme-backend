import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  birthdate?: number;

  @Field({ nullable: true })
  biography: string;

  @Field({ nullable: true })
  avatar?: string;
}
