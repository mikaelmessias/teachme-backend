import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import RepoService from 'src/repo.service';
import { PadawanEntity } from '../database/entity/PadawanEntity';
import { CreatePadawanInput } from './input/Padawan/CreatePadawanInput';
import { UpdatePadawanInput } from './input/Padawan/UpdatePadawanInput';

@Resolver(PadawanEntity)
export class PadawanResolver {
  constructor(private readonly repo: RepoService) {}

  @Mutation(() => PadawanEntity)
  async padawan_create(@Args('padawan') input: CreatePadawanInput) {
    const padawan = this.repo.padawan.create(input);

    return this.repo.padawan.save(padawan);
  }

  @Mutation(() => PadawanEntity)
  async padawan_update(@Args('padawan') input: UpdatePadawanInput) {
    const { id, ...updatedPadawan } = input;

    await this.repo.padawan.update(id, updatedPadawan);

    return this.repo.padawan.findOne(id);
  }

  @Mutation(() => Boolean)
  async padawan_delete_single(@Args('id') id: number) {
    const deleteResult = await this.repo.padawan.delete(id);

    return deleteResult.affected > 0;
  }

  @Query(() => [PadawanEntity])
  async padawan_list_all() {
    return this.repo.padawan.find();
  }

  @Query(() => [PadawanEntity], { nullable: true })
  async padawan_list_single(@Args('id') id: number) {
    return this.repo.padawan.findOne(id);
  }
}
