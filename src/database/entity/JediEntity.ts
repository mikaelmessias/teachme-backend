import { Field, ObjectType } from '@nestjs/graphql';
import { iJedi } from 'src/models/iJedi';
import { Entity, OneToMany } from 'typeorm';
import { BookingEntity } from './BookingEntity';
import { JediAvailabilityEntity } from './JediAvailabilityEntity';
import { JediSkillEntity } from './JediSkillEntity';
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
  availabilityConnection: Promise<JediAvailabilityEntity[]>;

  @Field(() => [JediSkillEntity], { nullable: true })
  skills: JediSkillEntity[];

  @OneToMany(() => JediSkillEntity, (jediSkill) => jediSkill.jediConnection, {
    lazy: true,
  })
  skillConnection: Promise<JediSkillEntity[]>;

  @Field(() => [BookingEntity], { nullable: true })
  bookings: BookingEntity[];

  @OneToMany(() => BookingEntity, (booking) => booking.jediConnection, {
    lazy: true,
  })
  bookingConnection: Promise<BookingEntity[]>;
}
