import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateJediSkillInput {
  @Field({ nullable: false })
  readonly jediId: number;

  @Field({ nullable: false })
  readonly techId: number;

  @Field({ nullable: false })
  readonly price: number;
}
