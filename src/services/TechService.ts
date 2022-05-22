import { Injectable } from '@nestjs/common';
import RepoService from '../repo.service';

@Injectable()
export class TechService {
  constructor(private readonly repoService: RepoService) {}

  async create(title: string, thumbnail: string) {
    const tech = this.repoService.techRepo.create({
      title: title,
      thumbnail: thumbnail,
    });

    return await this.repoService.techRepo.save(tech);
  }

  async updateThumbnail(id: number, newThumbnail: string) {
    await this.repoService.techRepo.update(id, { thumbnail: newThumbnail });

    return this.findOne(id);
  }

  async delete(id: number) {
    return await this.repoService.techRepo.delete(id);
  }

  async deleteAll() {
    const techs = await this.findAll();

    return await this.repoService.techRepo.remove(techs);
  }

  async findAll() {
    return await this.repoService.techRepo.find();
  }

  async findOne(id: number) {
    return await this.repoService.techRepo.findOne(id);
  }
}
