import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { IUsersRepository } from 'src/domain/interfaces/repositories/IUsersRepository';
import { UsersRepository } from 'src/infrasctructure/repositories/users.repository';

@Injectable()
export class DeleteUserUseCase {
  private readonly usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = UsersRepository.getInstance();
  }

  async execute(userId: string) {
    const user: User = await this.usersRepository.findUser(userId);

    if (!user) {
      throw new NotFoundException('User does not exists');
    }

    await this.usersRepository.delete(userId);
  }
}
