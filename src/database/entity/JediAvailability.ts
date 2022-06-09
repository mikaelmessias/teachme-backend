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
  @Field(() => WeekdaysEnum)
  @Column({ nullable: false })
  day: WeekdaysEnum;

  @Field()
  @Column({ name: 'jedi_id' })
  jediId: number;

  @Field(() => JediEntity)
  jedi: JediEntity;

  @ManyToOne(() => JediEntity, (jedi) => jedi.availabilityConnection)
  @JoinColumn({ name: 'jedi_id' })
  jediConnection: Promise<JediEntity>;
}
