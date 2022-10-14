import { Module } from '@nestjs/common';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';
import { FeedbacksController } from './feedbacks.controller';
import { ListFeedbackByUserUseCase } from './use-cases/list-feedback-by-user.use-case';
import { ListAllFeedbacksUseCase } from './use-cases/list-all-feedbacks.use-case';
import { ListAllFeedbacksByTypeUseCase } from './use-cases/list-all-feedbacks-by-type.use-case';
import { ListFeedbackByIdUseCase } from './use-cases/list-feedback-by-id.use-case';

@Module({
  providers: [CreateFeedbackUseCase, ListFeedbackByUserUseCase, ListAllFeedbacksUseCase, ListAllFeedbacksByTypeUseCase, ListFeedbackByIdUseCase],
  controllers: [FeedbacksController],
})
export class FeedbacksModule { }
