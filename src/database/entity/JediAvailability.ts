import { Field, ObjectType } from '@nestjs/graphql';
import { iJediAvailability } from 'src/models/iJediAvailability';
import { WeekdaysEnum } from 'src/utils/enum/WeekdaysEnum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { JediEntity } from './JediEntity';

@ObjectType()
@Entity({ name: 'jedisAvailability' })
export class JediAvailabilityEntity
  extends BaseEntity
  implements iJediAvailability
{
  @Field()
  @Column({ name: 'jedi_id' })
  jediId: number;

  @Field(() => WeekdaysEnum)
  @Column({ nullable: false })
  day: WeekdaysEnum;

  @Field(() => JediEntity)
  jedi: JediEntity;

  @ManyToOne(() => JediEntity, (jedi) => jedi.availabilityConnect)
  @JoinColumn({ name: 'jedi_id' })
  jediConnection: Promise<JediEntity>;
}
