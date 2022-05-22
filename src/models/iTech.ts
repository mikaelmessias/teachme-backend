import { iBaseModel } from './iBaseModel';

export interface iTech extends iBaseModel {
  id: number;
  title: string;
  thumbnail: string;
}
