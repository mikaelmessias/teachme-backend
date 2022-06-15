import { JediSkillEntity } from 'src/database/entity/JediSkillEntity';
import { iBaseModel } from './iBaseModel';

export interface iTech extends iBaseModel {
  title: string;
  thumbnail: string;
  skills: JediSkillEntity[];
}
