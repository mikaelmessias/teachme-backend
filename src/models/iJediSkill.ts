import { TechEntity } from 'src/database/entity/TechEntity';
import { UserEntity } from 'src/database/entity/UserEntity';

export interface iJediSkill {
  id: string;
  jedi: UserEntity;
  jediId: number;
  tech: TechEntity;
  techId: number;
  price: number;
  createdAt: number;
  updatedAt: number;
}
