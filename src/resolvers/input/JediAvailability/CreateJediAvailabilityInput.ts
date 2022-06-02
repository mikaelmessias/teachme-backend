import { Field, InputType } from '@nestjs/graphql';
import { WeekdaysEnum } from 'src/utils/enum/WeekdaysEnum';

@InputType()
export class CreateJediAvailabilityInput {
  @Field()
  readonly jediId: number;

  @Field(() => [WeekdaysEnum], { nullable: false })
  readonly days: WeekdaysEnum[];
}
