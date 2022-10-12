import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/infrasctructure/database/PrismaService';
import { ListUsersUseCase } from './use-cases/list-users.use-case.ts';

@Module({
  providers: [CreateUserUseCase, PrismaService, ListUsersUseCase],
  controllers: [UsersController]
})
export class UsersModule { }
