import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [CreateUserUseCase, PrismaService],
  controllers: [UsersController]
})
export class UsersModule { }
