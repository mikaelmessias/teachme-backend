import { WeekdaysEnum } from 'src/utils/enum/WeekdaysEnum';
import { iUser } from './iUser';

export interface iJediAvailability {
  id: string;
  jedi: iUser;
  jediId: number;
  day: WeekdaysEnum;
  createdAt: number;
  updatedAt: number;
}
