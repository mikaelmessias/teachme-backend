import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppEntities from './database/entity';
import RepoService from './repo.service';
import AppServices from './services';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(AppEntities)],
  providers: [RepoService, ...AppServices],
  exports: [RepoService, ...AppServices],
})
class RepoModule {}

export default RepoModule;
