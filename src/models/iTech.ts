import { JediSkillEntity } from 'src/database/entity/JediSkill';
import { iBaseModel } from './iBaseModel';

export interface iTech extends iBaseModel {
  title: string;
  thumbnail: string;
  skills: JediSkillEntity[];
}
