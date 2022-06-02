import { Field, ObjectType } from '@nestjs/graphql';
import { iJedi } from 'src/models/iJedi';
import { Entity, OneToMany } from 'typeorm';
import { JediAvailabilityEntity } from './JediAvailability';
import { PadawanEntity } from './PadawanEntity';

@ObjectType()
@Entity({ name: 'jedis' })
export class JediEntity extends PadawanEntity implements iJedi {
  @Field(() => [JediAvailabilityEntity], { nullable: true })
  availability: JediAvailabilityEntity[];

  @OneToMany(
    () => JediAvailabilityEntity,
    (jediAvailability) => jediAvailability.jediConnection,
    { lazy: true },
  )
  availabilityConnect: Promise<JediAvailabilityEntity[]>;
}
