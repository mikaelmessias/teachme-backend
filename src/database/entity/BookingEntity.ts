import { Field, ObjectType } from '@nestjs/graphql';
import { iBooking } from 'src/models/iBooking';
import { BookingStatusEnum } from 'src/utils/enum/BookingStatusEnum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { TechEntity } from './TechEntity';
import { UserEntity } from './UserEntity';

@ObjectType()
@Entity({ name: 'bookings' })
export class BookingEntity extends BaseEntity implements iBooking {
  @Field()
  @Column()
  date: number;

  @Field(() => BookingStatusEnum)
  @Column({ nullable: true, default: 'UNCONFIRMED' })
  status: BookingStatusEnum;

  @Field()
  @Column({ name: 'tech_id' })
  techId: number;

  @Field(() => TechEntity)
  tech: TechEntity;

  @ManyToOne(() => TechEntity, (tech) => tech.bookingConnection)
  @JoinColumn({ name: 'tech_id' })
  techConnection: Promise<UserEntity[]>;

  @Field()
  @Column({ name: 'padawan_id' })
  padawanId: number;

  @Field(() => UserEntity)
  padawan: UserEntity;

  @ManyToOne(() => UserEntity, (padawan) => padawan.bookingConnection)
  @JoinColumn({ name: 'padawan_id' })
  padawanConnection: Promise<UserEntity[]>;

  @Field()
  @Column({ name: 'jedi_id' })
  jediId: number;

  @Field(() => UserEntity)
  jedi: UserEntity;

  @ManyToOne(() => UserEntity, (jedi) => jedi.bookingConnection)
  @JoinColumn({ name: 'jedi_id' })
  jediConnection: Promise<UserEntity[]>;
}
