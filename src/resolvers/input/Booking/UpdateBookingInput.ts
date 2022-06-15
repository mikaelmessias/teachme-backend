import { Field, InputType } from '@nestjs/graphql';
import { BookingStatusEnum } from 'src/utils/enum/BookingStatusEnum';

@InputType()
export class UpdateBookingStatus {
  @Field({ nullable: false })
  id: number;

  @Field({ nullable: false })
  status: BookingStatusEnum;
}
