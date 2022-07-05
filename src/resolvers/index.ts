import { BookingResolver } from './BookingResolver';
import { JediAvailabilityResolver } from './JediAvailabilityResolver';
import { JediSkillResolver } from './JediSkillResolver';
import { TechResolver } from './TechResolver';
import { UserResolver } from './UserResolver';

export default [
  JediAvailabilityResolver,
  TechResolver,
  UserResolver,
  JediSkillResolver,
  BookingResolver,
];
