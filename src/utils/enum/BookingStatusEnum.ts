import { registerEnumType } from '@nestjs/graphql';

export enum BookingStatusEnum {
  UNCONFIRMED = 'UNCONFIRMED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

registerEnumType(BookingStatusEnum, {
  name: 'BookingStatusEnum',
});
