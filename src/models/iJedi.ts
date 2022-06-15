import { BookingEntity } from 'src/database/entity/BookingEntity';
import { JediAvailabilityEntity } from 'src/database/entity/JediAvailabilityEntity';
import { JediSkillEntity } from 'src/database/entity/JediSkillEntity';
import { iPadawan } from './iPadawan';

export interface iJedi extends iPadawan {
  availability: JediAvailabilityEntity[];
  skills: JediSkillEntity[];
  bookings: BookingEntity[];
}
