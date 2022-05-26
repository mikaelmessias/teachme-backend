import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PadawanEntity } from '../database/entity/PadawanEntity';
import { PadawanService } from '../services/PadawanService';
import { CreatePadawanInput } from './input/Padawan/CreatePadawanInput';
import { UpdatePadawanInput } from './input/Padawan/UpdatePadawanInput';

@Resolver()
export class PadawanResolver {
  constructor(private readonly padawanService: PadawanService) {}

  @Mutation(() => PadawanEntity)
  async padawan_create(@Args('padawan') input: CreatePadawanInput) {
    return this.padawanService.create(input);
  }

  @Mutation(() => PadawanEntity)
  async padawan_update(@Args('padawan') input: UpdatePadawanInput) {
    return this.padawanService.update(input);
  }

  @Mutation(() => Boolean)
  async padawan_delete_single(@Args('id') id: number) {
    const deleteResult = await this.padawanService.delete(id);

    return deleteResult.affected > 0;
  }

  @Query(() => [PadawanEntity])
  async padawan_list_all() {
    return this.padawanService.findAll();
  }

  @Query(() => [PadawanEntity], { nullable: true })
  async padawan_list_single(@Args('id') id: number) {
    return this.padawanService.findOne(id);
  }
}
