import { Injectable, NotFoundException } from '@nestjs/common';
import { Feedback } from 'src/domain/entities/Feedback';
import { IFeedbacksRepository } from 'src/domain/interfaces/repositories/IFeedbacksRepository';
import { FeedbacksRepository } from 'src/infrasctructure/repositories/feedbacks.repository';

@Injectable()
export class ListFeedbackByIdUseCase {
  private readonly feedbacksRespository: IFeedbacksRepository;

  constructor() {
    this.feedbacksRespository = FeedbacksRepository.getInstance();
  }

  async execute(id: string): Promise<Feedback> {
    const feedback = await this.feedbacksRespository.listFeedbackById(id);

    if (feedback.id === undefined) {
      throw new NotFoundException('This feedback does not exists');
    }

    return feedback;
  }
}
