import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTechInput {
  @Field()
  readonly id: number;

  @Field()
  readonly thumbnail: string;
}
