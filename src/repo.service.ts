import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JediAvailabilityEntity } from './database/entity/JediAvailability';
import { JediEntity } from './database/entity/JediEntity';
import { JediSkillEntity } from './database/entity/JediSkill';
import { PadawanEntity } from './database/entity/PadawanEntity';
import { TechEntity } from './database/entity/TechEntity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(TechEntity)
    public readonly tech: Repository<TechEntity>,

    @InjectRepository(PadawanEntity)
    public readonly padawan: Repository<PadawanEntity>,

    @InjectRepository(JediEntity)
    public readonly jedi: Repository<JediEntity>,

    @InjectRepository(JediAvailabilityEntity)
    public readonly jediAvailability: Repository<JediAvailabilityEntity>,

    @InjectRepository(JediSkillEntity)
    public readonly jediSkill: Repository<JediSkillEntity>,
  ) {}
}

export default RepoService;
