import { Injectable, NotFoundException } from '@nestjs/common';
import { IFeedbacksRepository } from 'src/domain/interfaces/repositories/IFeedbacksRepository';
import { FeedbacksRepository } from 'src/infrasctructure/repositories/feedbacks.repository';

@Injectable()
export class DeleteFeedbackUseCase {
  private readonly feedbacksRepository: IFeedbacksRepository;

  constructor() {
    this.feedbacksRepository = FeedbacksRepository.getInstance();
  }

  async execute(id: string): Promise<void> {
    const feedback = await this.feedbacksRepository.listFeedbackById(id);

    if (!feedback.id) {
      throw new NotFoundException("Feedback does not exists")
    }

    await this.feedbacksRepository.deleteFeedback(feedback.id);
  }

}
