import { iBaseModel } from './iBaseModel';
import { iJedi } from './iJedi';
import { iTech } from './iTech';

export interface iJediSkill extends iBaseModel {
  jedi: iJedi;
  jediId: number;
  tech: iTech;
  techId: number;
  price: number;
}
