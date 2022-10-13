import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDTO } from 'src/domain/dtos/CreateFeedbackTDO';
import { IFeedbacksRepository } from 'src/domain/interfaces/repositories/IFeedbacksRepository';
import { IUsersRepository } from 'src/domain/interfaces/repositories/IUsersRepository';
import { FeedbacksRepository } from 'src/infrasctructure/repositories/feedbacks.repository';
import { UsersRepository } from 'src/infrasctructure/repositories/users.repository';

@Injectable()
export class CreateFeedbackUseCase {
  private feedbacksRepository: IFeedbacksRepository;
  private usersRepository: IUsersRepository;

  constructor() {
    this.feedbacksRepository = FeedbacksRepository.getInstance();
    this.usersRepository = UsersRepository.getInstance();
  }

  async execute(createFeedbackDTO: CreateFeedbackDTO) {
    const { userId } = createFeedbackDTO;
    const userExists = this.usersRepository.findUser(userId);

    if (!userExists) {
      throw new NotFoundException("User does not exists");
    }

    await this.feedbacksRepository.create(createFeedbackDTO);
  }
}
