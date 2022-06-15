import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { BookingEntity } from 'src/database/entity/BookingEntity';
import { JediEntity } from 'src/database/entity/JediEntity';
import { PadawanEntity } from 'src/database/entity/PadawanEntity';
import { TechEntity } from 'src/database/entity/TechEntity';
import RepoService from 'src/repo.service';
import { CreateBookingInput } from './input/Booking/CreateBookingInput';
import { UpdateBookingStatus } from './input/Booking/UpdateBookingInput';

@Resolver(BookingEntity)
export class BookingResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => BookingEntity)
  async booking_create(@Args('booking') input: CreateBookingInput) {
    const { date, techId, jediId, padawanId } = input;

    const isCreated = await this.repo.booking.findOne({
      where: { date, jediId, padawanId },
    });

    if (isCreated) {
      return;
    }

    const booking = this.repo.booking.create({
      date,
      techId,
      jediId,
      padawanId,
    });

    return await this.repo.booking.save(booking);
  }

  @Mutation(() => Boolean)
  async booking_update_status(@Args('input') input: UpdateBookingStatus) {
    const { id, status } = input;

    await this.repo.booking.update(id, { status });

    return await this.repo.booking.findOne(id);
  }

  @Mutation(() => Boolean)
  async booking_delete_single(@Args('id') id: number) {
    const deleteResult = await this.repo.booking.delete(id);

    return deleteResult.affected > 0;
  }

  @Query(() => [BookingEntity])
  async booking_list_all() {
    return await this.repo.booking.find();
  }

  @Query(() => BookingEntity)
  async booking_list_single(@Args('id') id: number) {
    return await this.repo.booking.findOne(id);
  }

  @Query(() => [BookingEntity])
  async booking_list_by_jedi_id(@Args('jediId') jediId: number) {
    return await this.repo.booking.find({
      where: { jediId },
    });
  }

  @Query(() => [BookingEntity])
  async booking_list_by_padawan_id(@Args('padawanId') padawanId: number) {
    return await this.repo.booking.find({
      where: { padawanId },
    });
  }

  @ResolveField(() => PadawanEntity)
  async padawan(@Parent() parent: BookingEntity) {
    return await this.repo.padawan.findOne(parent.padawanId);
  }

  @ResolveField(() => JediEntity)
  async jedi(@Parent() parent: BookingEntity) {
    return await this.repo.jedi.findOne(parent.jediId);
  }

  @ResolveField(() => TechEntity)
  async tech(@Parent() parent: BookingEntity) {
    return await this.repo.tech.findOne(parent.techId);
  }
}
