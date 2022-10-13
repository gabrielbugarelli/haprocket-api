import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { UsersController } from './users.controller';
import { ListUsersUseCase } from './use-cases/list-users.use-case.ts';

@Module({
  providers: [CreateUserUseCase, ListUsersUseCase],
  controllers: [UsersController]
})
export class UsersModule { }
