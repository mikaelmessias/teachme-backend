import { iBaseModel } from './iBaseModel';

export interface iPadawan extends iBaseModel {
  name: string;
  email: string;
  password: string;
  cpf: string;
  birthdate?: number;
  biography?: string;
  avatar?: string;
}
