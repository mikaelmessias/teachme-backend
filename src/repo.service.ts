import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from './database/entity/BookingEntity';
import { JediAvailabilityEntity } from './database/entity/JediAvailabilityEntity';
import { JediSkillEntity } from './database/entity/JediSkillEntity';
import { TechEntity } from './database/entity/TechEntity';
import { UserEntity } from './database/entity/UserEntity';

@Injectable()
class RepoService {
  public constructor(
    @InjectRepository(TechEntity)
    public readonly tech: Repository<TechEntity>,

    @InjectRepository(UserEntity)
    public readonly user: Repository<UserEntity>,

    @InjectRepository(JediAvailabilityEntity)
    public readonly jediAvailability: Repository<JediAvailabilityEntity>,

    @InjectRepository(JediSkillEntity)
    public readonly jediSkill: Repository<JediSkillEntity>,

    @InjectRepository(BookingEntity)
    public readonly booking: Repository<BookingEntity>,
  ) {}
}

export default RepoService;
