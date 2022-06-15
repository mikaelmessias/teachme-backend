import { Field, ObjectType } from '@nestjs/graphql';
import { iJedi } from 'src/models/iJedi';
import { iJediSkill } from 'src/models/iJediSkill';
import { iTech } from 'src/models/iTech';
import {
  AfterInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { JediEntity } from './JediEntity';
import { TechEntity } from './TechEntity';

@ObjectType()
@Entity({ name: 'jedisSkills' })
export class JediSkillEntity implements iJediSkill {
  @Field()
  @PrimaryColumn({ unique: true })
  id: string;

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

  @Field()
  @Column({ name: 'created_at', default: Date.now() })
  createdAt: number;

  @Field()
  @Column({ name: 'updated_at', default: Date.now() })
  updatedAt: number;

  @AfterInsert()
  setCreatedAt() {
    this.createdAt = Date.now();
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = Date.now();
  }
}
