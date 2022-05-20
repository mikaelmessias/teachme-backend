import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entities/User';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

createConnection()
  .then(async (connection) => {
    const users = await connection.manager.find(User);

    console.log('Loaded users: ', users);
  })
  .catch((error) => console.log(error));
