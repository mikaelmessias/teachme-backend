import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppEntities from './database/entity';
import RepoService from './repo.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(AppEntities)],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}

export default RepoModule;
