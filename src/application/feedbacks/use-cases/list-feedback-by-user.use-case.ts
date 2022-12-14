import { Injectable, NotFoundException } from '@nestjs/common';
import { Feedback } from 'src/domain/entities/Feedback';
import { IFeedbacksRepository } from 'src/domain/interfaces/repositories/IFeedbacksRepository';
import { FeedbacksRepository } from 'src/infrasctructure/repositories/feedbacks.repository';

@Injectable()
export class ListFeedbackByUserUseCase {
  private readonly feedbacksRepository: IFeedbacksRepository;

  constructor() {
    this.feedbacksRepository = FeedbacksRepository.getInstance();
  }

  async execute(userId: string): Promise<Feedback[]> {
    if (!userId) {
      throw new NotFoundException('User does not exists');
    }

    const feedbacks = await this.feedbacksRepository.listFeedbacksByUser(userId);

    if (!feedbacks) {
      throw new NotFoundException('User does not exists');
    }
    return feedbacks;
  }

}
