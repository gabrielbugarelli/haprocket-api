import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { UsersController } from './users.controller';
import { ListUsersUseCase } from './use-cases/list-users.use-case.ts';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';

@Module({
  providers: [CreateUserUseCase, ListUsersUseCase, DeleteUserUseCase],
  controllers: [UsersController]
})
export class UsersModule { }
