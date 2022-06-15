import { JediEntity } from 'src/database/entity/JediEntity';
import { PadawanEntity } from 'src/database/entity/PadawanEntity';
import { TechEntity } from 'src/database/entity/TechEntity';
import { BookingStatusEnum } from 'src/utils/enum/BookingStatusEnum';
import { iBaseModel } from './iBaseModel';

export interface iBooking extends iBaseModel {
  date: number;
  status: BookingStatusEnum;
  tech: TechEntity;
  techId: number;
  padawan: PadawanEntity;
  padawanId: number;
  jedi: JediEntity;
  jediId: number;
}
