import { BookingEntity } from 'src/database/entity/BookingEntity';
import { JediAvailabilityEntity } from 'src/database/entity/JediAvailabilityEntity';
import { JediSkillEntity } from 'src/database/entity/JediSkillEntity';
import { UserTypeEnum } from 'src/utils/enum/UserTypeEnum';
import { iBaseModel } from './iBaseModel';

export interface iUser extends iBaseModel {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthdate?: number;
  biography?: string;
  avatar?: string;
  userType: UserTypeEnum;
  availability: JediAvailabilityEntity[];
  skills: JediSkillEntity[];
  bookings: BookingEntity[];
}
