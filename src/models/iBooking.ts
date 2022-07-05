import { TechEntity } from 'src/database/entity/TechEntity';
import { UserEntity } from 'src/database/entity/UserEntity';
import { BookingStatusEnum } from 'src/utils/enum/BookingStatusEnum';
import { iBaseModel } from './iBaseModel';

export interface iBooking extends iBaseModel {
  date: number;
  status: BookingStatusEnum;
  tech: TechEntity;
  techId: number;
  padawan: UserEntity;
  padawanId: number;
  jedi: UserEntity;
  jediId: number;
}
