/* eslint-disable @typescript-eslint/no-empty-interface */
import { iJediAvailability } from './iJediAvailability';
import { iPadawan } from './iPadawan';

export interface iJedi extends iPadawan {
  availability: iJediAvailability[];
}
