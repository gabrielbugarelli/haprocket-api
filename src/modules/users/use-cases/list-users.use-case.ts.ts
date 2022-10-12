import { Injectable } from '@nestjs/common';
import { User } from 'src/@core/domain/entities/User';
import { IUsersRepository } from 'src/@core/domain/interfaces/repositories/IUsersRepository';
import { UsersRepository } from '../users.repository';

@Injectable()
export class ListUsersUseCase {
  private readonly usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = UsersRepository.getInstance();
  }

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.listUsers();
    return users;
  }
}
