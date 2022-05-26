import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PadawanEntity } from './database/entity/PadawanEntity';
import { TechEntity } from './database/entity/TechEntity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(TechEntity)
    public readonly tech: Repository<TechEntity>,

    @InjectRepository(PadawanEntity)
    public readonly padawan: Repository<PadawanEntity>,
  ) {}
}

export default RepoService;
