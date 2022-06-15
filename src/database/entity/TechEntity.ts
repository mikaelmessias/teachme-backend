import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, OneToMany } from 'typeorm';
import { iTech } from '../../models/iTech';
import { BaseEntity } from './BaseEntity';
import { BookingEntity } from './BookingEntity';
import { JediSkillEntity } from './JediSkillEntity';

@ObjectType()
@Entity({ name: 'techs' })
export class TechEntity extends BaseEntity implements iTech {
  @Field()
  @Column({ unique: true, nullable: false })
  title: string;

  @Field()
  @Column({ nullable: false })
  thumbnail: string;

  @Field(() => [JediSkillEntity], { nullable: true })
  skills: JediSkillEntity[];

  @OneToMany(() => JediSkillEntity, (jediSkill) => jediSkill.jediConnection, {
    lazy: true,
  })
  skillConnection: Promise<JediSkillEntity[]>;

  @OneToMany(() => BookingEntity, (booking) => booking.techConnection, {
    lazy: true,
  })
  bookingConnection: Promise<BookingEntity[]>;
}
