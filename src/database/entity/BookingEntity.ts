import { Field, ObjectType } from '@nestjs/graphql';
import { iBooking } from 'src/models/iBooking';
import { BookingStatusEnum } from 'src/utils/enum/BookingStatusEnum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { JediEntity } from './JediEntity';
import { PadawanEntity } from './PadawanEntity';
import { TechEntity } from './TechEntity';

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
  techConnection: Promise<PadawanEntity[]>;

  @Field()
  @Column({ name: 'padawan_id' })
  padawanId: number;

  @Field(() => PadawanEntity)
  padawan: PadawanEntity;

  @ManyToOne(() => PadawanEntity, (padawan) => padawan.bookingConnection)
  @JoinColumn({ name: 'padawan_id' })
  padawanConnection: Promise<PadawanEntity[]>;

  @Field()
  @Column({ name: 'jedi_id' })
  jediId: number;

  @Field(() => JediEntity)
  jedi: JediEntity;

  @ManyToOne(() => JediEntity, (jedi) => jedi.bookingConnection)
  @JoinColumn({ name: 'jedi_id' })
  jediConnection: Promise<JediEntity[]>;
}
