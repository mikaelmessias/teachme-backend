import { JediAvailabilityEntity } from 'src/database/entity/JediAvailability';
import { JediSkillEntity } from 'src/database/entity/JediSkill';
import { iPadawan } from './iPadawan';

export interface iJedi extends iPadawan {
  availability: JediAvailabilityEntity[];
  skills: JediSkillEntity[];
}
