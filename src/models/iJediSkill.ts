import { JediEntity } from 'src/database/entity/JediEntity';
import { TechEntity } from 'src/database/entity/TechEntity';
export interface iJediSkill {
  id: string;
  jedi: JediEntity;
  jediId: number;
  tech: TechEntity;
  techId: number;
  price: number;
  createdAt: number;
  updatedAt: number;
}
