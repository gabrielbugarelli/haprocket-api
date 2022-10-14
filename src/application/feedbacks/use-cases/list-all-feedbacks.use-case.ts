import { Injectable } from '@nestjs/common';
import { Feedback } from 'src/domain/entities/Feedback';
import { IFeedbacksRepository } from 'src/domain/interfaces/repositories/IFeedbacksRepository';
import { FeedbacksRepository } from 'src/infrasctructure/repositories/feedbacks.repository';

@Injectable()
export class ListAllFeedbacksUseCase {
  private feedbacksRepository: IFeedbacksRepository;

  constructor() {
    this.feedbacksRepository = FeedbacksRepository.getInstance();
  }

  async execute(): Promise<Feedback[]> {
    return await this.feedbacksRepository.listAllFeedbacks();
  }
}
