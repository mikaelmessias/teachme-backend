import { Field, ObjectType } from '@nestjs/graphql';
import { iJediAvailability } from 'src/models/iJediAvailability';
import { WeekdaysEnum } from 'src/utils/enum/WeekdaysEnum';
import {
  AfterInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { UserEntity } from './UserEntity';

@ObjectType()
@Entity({ name: 'jedisAvailability' })
export class JediAvailabilityEntity implements iJediAvailability {
  @Field()
  @PrimaryColumn({ unique: true })
  id: string;

  @Field(() => WeekdaysEnum)
  @Column()
  day: WeekdaysEnum;

  @Field()
  @Column({ name: 'jedi_id' })
  jediId: number;

  @Field(() => UserEntity)
  jedi: UserEntity;

  @ManyToOne(() => UserEntity, (jedi) => jedi.availabilityConnection)
  @JoinColumn({ name: 'jedi_id' })
  jediConnection: Promise<UserEntity>;

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
