import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TechEntity } from './database/entity/TechEntity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(TechEntity)
    public readonly techRepo: Repository<TechEntity>,
  ) {}
}

export default RepoService;
