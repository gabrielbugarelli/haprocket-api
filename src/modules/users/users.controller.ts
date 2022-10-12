import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/@core/domain/dtos/CreateUserDTO';
import { CreateUserUseCase } from './use-cases/create-user.use-case';

@Controller('users')
export class UsersController {
  private readonly createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  @Post()
  async createUser(@Body() user: CreateUserDTO): Promise<void> {
    await this.createUserUseCase.execute(user);
  }
}
