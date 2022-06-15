import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteJediSkillInput {
  @Field()
  readonly jediId: number;

  @Field()
  readonly techId: number;
}
