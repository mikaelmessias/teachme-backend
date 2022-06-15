import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, OneToMany } from 'typeorm';
import { iPadawan } from '../../models/iPadawan';
import { BaseEntity } from './BaseEntity';
import { BookingEntity } from './BookingEntity';

@ObjectType()
@Entity({ name: 'padawans' })
export class PadawanEntity extends BaseEntity implements iPadawan {
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

  @Field(() => [BookingEntity], { nullable: true })
  bookings: BookingEntity[];

  @OneToMany(() => BookingEntity, (booking) => booking.padawanConnection, {
    lazy: true,
  })
  bookingConnection: Promise<BookingEntity[]>;
}
