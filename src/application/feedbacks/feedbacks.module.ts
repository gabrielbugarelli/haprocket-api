import { Module } from '@nestjs/common';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';
import { FeedbacksController } from './feedbacks.controller';
import { ListFeedbackByUserUseCase } from './use-cases/list-feedback-by-user.use-case';

@Module({
  providers: [CreateFeedbackUseCase, ListFeedbackByUserUseCase],
  controllers: [FeedbacksController],
})
export class FeedbacksModule { }
