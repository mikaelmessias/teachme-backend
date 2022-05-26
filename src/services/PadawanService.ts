import { Injectable } from '@nestjs/common';
import { CreatePadawanInput } from 'src/resolvers/input/Padawan/CreatePadawanInput';
import { UpdatePadawanInput } from 'src/resolvers/input/Padawan/UpdatePadawanInput';
import RepoService from '../repo.service';

@Injectable()
export class PadawanService {
  constructor(private readonly repoService: RepoService) {}

  async create(input: CreatePadawanInput) {
    const padawan = this.repoService.padawan.create(input);

    return await this.repoService.padawan.save(padawan);
  }

  async update(input: UpdatePadawanInput) {
    const { id, ...updatedPadawan } = input;

    await this.repoService.padawan.update(id, updatedPadawan);

    return this.findOne(id);
  }

  async delete(id: number) {
    return await this.repoService.padawan.delete(id);
  }

  async deleteAll() {
    const padawans = await this.findAll();

    return await this.repoService.padawan.remove(padawans);
  }

  async findAll() {
    return await this.repoService.padawan.find();
  }

  async findOne(id: number) {
    return await this.repoService.padawan.findOne(id);
  }
}
