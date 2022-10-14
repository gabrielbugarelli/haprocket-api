import { Injectable, NotFoundException } from '@nestjs/common';
import { Feedback } from 'src/domain/entities/Feedback';
import { FeedbackTypeEnum } from 'src/domain/enums/FeedbackTypeEnum';
import { IFeedbacksRepository } from 'src/domain/interfaces/repositories/IFeedbacksRepository';
import { FeedbacksRepository } from 'src/infrasctructure/repositories/feedbacks.repository';

@Injectable()
export class ListAllFeedbacksByTypeUseCase {
  private readonly feedbacksRepository: IFeedbacksRepository;

  constructor() {
    this.feedbacksRepository = FeedbacksRepository.getInstance();
  }

  async execute(feedbackType: FeedbackTypeEnum): Promise<Feedback[]> {
    if (feedbackType !== FeedbackTypeEnum.NEGATIVE && feedbackType !== FeedbackTypeEnum.POSITIVE) {
      throw new NotFoundException("Type does not exists");
    }

    return await this.feedbacksRepository.listAllFeedbacksByType(feedbackType);
  }
}
