import { ObjectType, Field } from '@nestjs/graphql';
import { iUser } from 'src/models/iUser';
import { UserTypeEnum } from 'src/utils/enum/UserTypeEnum';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { BookingEntity } from './BookingEntity';
import { JediAvailabilityEntity } from './JediAvailabilityEntity';
import { JediSkillEntity } from './JediSkillEntity';

@ObjectType()
@Entity({ name: 'users' })
export class UserEntity extends BaseEntity implements iUser {
  @Field({})
  @Column({ length: 80 })
  name: string;

  @Field()
  @Column({ unique: true, length: 180 })
  email: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column({ unique: true, length: 11 })
  cpf: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  birthdate: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  biography: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  avatar: string;

  @Field(() => UserTypeEnum)
  @Column()
  userType: UserTypeEnum;

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
