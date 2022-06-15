import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from './database/entity/BookingEntity';
import { JediAvailabilityEntity } from './database/entity/JediAvailabilityEntity';
import { JediEntity } from './database/entity/JediEntity';
import { JediSkillEntity } from './database/entity/JediSkillEntity';
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

    @InjectRepository(BookingEntity)
    public readonly booking: Repository<BookingEntity>,
  ) {}
}

export default RepoService;
