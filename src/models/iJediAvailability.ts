import { WeekdaysEnum } from 'src/utils/enum/WeekdaysEnum';
import { iJedi } from './iJedi';

export interface iJediAvailability {
  id: string;
  jedi: iJedi;
  jediId: number;
  day: WeekdaysEnum;
  createdAt: number;
  updatedAt: number;
}
