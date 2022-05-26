import { Injectable } from '@nestjs/common';
import RepoService from '../repo.service';

@Injectable()
export class TechService {
  constructor(private readonly repoService: RepoService) {}

  async create(title: string, thumbnail: string) {
    const tech = this.repoService.tech.create({
      title: title,
      thumbnail: thumbnail,
    });

    return await this.repoService.tech.save(tech);
  }

  async updateThumbnail(id: number, newThumbnail: string) {
    await this.repoService.tech.update(id, { thumbnail: newThumbnail });

    return this.findOne(id);
  }

  async delete(id: number) {
    return await this.repoService.tech.delete(id);
  }

  async deleteAll() {
    const techs = await this.findAll();

    return await this.repoService.tech.remove(techs);
  }

  async findAll() {
    return await this.repoService.tech.find();
  }

  async findOne(id: number) {
    return await this.repoService.tech.findOne(id);
  }
}
