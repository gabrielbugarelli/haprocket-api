import { Module } from '@nestjs/common';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';
import { FeedbacksController } from './feedbacks.controller';
import { ListFeedbackByUserUseCase } from './use-cases/list-feedback-by-user.use-case';
import { ListAllFeedbacksUseCase } from './use-cases/list-all-feedbacks.use-case';

@Module({
  providers: [CreateFeedbackUseCase, ListFeedbackByUserUseCase, ListAllFeedbacksUseCase],
  controllers: [FeedbacksController],
})
export class FeedbacksModule { }
