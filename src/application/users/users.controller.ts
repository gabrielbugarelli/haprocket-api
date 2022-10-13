import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/domain/dtos/CreateUserDTO';
import { User } from 'src/domain/entities/User';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { ListUsersUseCase } from './use-cases/list-users.use-case.ts';

@ApiTags('users')
@Controller('users')
export class UsersController {
  private readonly createUserUseCase: CreateUserUseCase;
  private readonly listUserUseCase: ListUsersUseCase;

  constructor(
    createUserUseCase: CreateUserUseCase,
    listUserUseCase: ListUsersUseCase
  ) {
    this.createUserUseCase = createUserUseCase;
    this.listUserUseCase = listUserUseCase;
  }

  @Post()
  async createUser(@Body() user: CreateUserDTO): Promise<void> {
    await this.createUserUseCase.execute(user);
  }

  @Get()
  async listAllUsers(): Promise<User[]> {
    return await this.listUserUseCase.execute();
  }
}
