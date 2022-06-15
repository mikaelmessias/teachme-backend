import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookingInput {
  @Field()
  date: number;

  @Field()
  techId: number;

  @Field()
  padawanId: number;

  @Field()
  jediId: number;
}
