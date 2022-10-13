import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/domain/dtos/CreateUserDTO';
import { IUsersRepository } from 'src/domain/interfaces/repositories/IUsersRepository';
import { UsersRepository } from '../../../infrasctructure/repositories/users.repository';

@Injectable()
export class CreateUserUseCase {
  private readonly usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = UsersRepository.getInstance();
  }

  async execute(createUserDTO: CreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name: createUserDTO.name
    });
  }
}
