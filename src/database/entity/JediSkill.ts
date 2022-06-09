import { Field, ObjectType } from '@nestjs/graphql';
import { iJedi } from 'src/models/iJedi';
import { iJediSkill } from 'src/models/iJediSkill';
import { iTech } from 'src/models/iTech';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { JediEntity } from './JediEntity';
import { TechEntity } from './TechEntity';

@ObjectType()
@Entity({ name: 'jedisSkills' })
export class JediSkillEntity extends BaseEntity implements iJediSkill {
  @Field()
  @Column({ name: 'jedi_id' })
  jediId: number;

  @Field(() => JediEntity)
  jedi: JediEntity;

  @ManyToOne(() => JediEntity, (jedi) => jedi.skillConnection)
  @JoinColumn({ name: 'jedi_id' })
  jediConnection: Promise<iJedi>;

  @Field()
  @Column({ name: 'tech_id' })
  techId: number;

  @Field(() => TechEntity)
  tech: TechEntity;

  @ManyToOne(() => TechEntity, (tech) => tech.skillConnection)
  @JoinColumn({ name: 'tech_id' })
  techConnection: Promise<iTech>;

  @Field()
  @Column({ name: 'price' })
  price: number;
}
