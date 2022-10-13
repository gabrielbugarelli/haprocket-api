import { Module } from '@nestjs/common';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';
import { FeedbacksController } from './feedbacks.controller';

@Module({
  providers: [CreateFeedbackUseCase],
  controllers: [FeedbacksController],
})
export class FeedbacksModule { }
