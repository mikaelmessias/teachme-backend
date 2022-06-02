import { WeekdaysEnum } from 'src/utils/enum/WeekdaysEnum';
import { iBaseModel } from './iBaseModel';
import { iJedi } from './iJedi';

export interface iJediAvailability extends iBaseModel {
  id: number;
  jedi: iJedi;
  jediId: number;
  day: WeekdaysEnum;
}
