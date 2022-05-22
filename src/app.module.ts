import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import GraphQLResolvers from './resolvers';
import RepoModule from './repo.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepoModule,
    ...GraphQLResolvers,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
    }),
  ],
})
export class AppModule {}
