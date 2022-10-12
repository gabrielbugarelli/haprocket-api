import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/@core/domain/dtos/CreateUserDTO';
import { IUsersRepository } from 'src/@core/domain/interfaces/repositories/IUsersRepository';
import { UsersRepository } from '../users.repository';

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
