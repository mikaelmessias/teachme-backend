import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTechInput {
  @Field()
  readonly title: string;

  @Field()
  readonly thumbnail: string;
}
