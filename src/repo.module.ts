import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechEntity } from './database/entity/TechEntity';
import RepoService from './repo.service';
import AppServices from './services';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([TechEntity])],
  providers: [RepoService, ...AppServices],
  exports: [RepoService, ...AppServices],
})
class RepoModule {}

export default RepoModule;
