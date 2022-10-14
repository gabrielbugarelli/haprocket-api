import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Response } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/domain/dtos/CreateUserDTO';
import { User } from 'src/domain/entities/User';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { ListUsersUseCase } from './use-cases/list-users.use-case.ts';

@ApiTags('users')
@Controller('users')
export class UsersController {
  private readonly createUserUseCase: CreateUserUseCase;
  private readonly listUserUseCase: ListUsersUseCase;
  private readonly deleteUserUseCase: DeleteUserUseCase;

  constructor(
    createUserUseCase: CreateUserUseCase,
    listUserUseCase: ListUsersUseCase,
    deleteUserUseCase: DeleteUserUseCase
  ) {
    this.createUserUseCase = createUserUseCase;
    this.listUserUseCase = listUserUseCase;
    this.deleteUserUseCase = deleteUserUseCase;
  }

  @Post()
  async createUser(@Body() user: CreateUserDTO): Promise<void> {
    await this.createUserUseCase.execute(user);
  }

  @Get()
  async listAllUsers(): Promise<User[]> {
    return await this.listUserUseCase.execute();
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string) {
    await this.deleteUserUseCase.execute(userId);

    return HttpStatus.OK;
  }
}
