import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedbackDTO } from 'src/domain/dtos/CreateFeedbackTDO';
import { Feedback } from 'src/domain/entities/Feedback';
import { FeedbackTypeEnum } from 'src/domain/enums/FeedbackTypeEnum';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';
import { ListAllFeedbacksByTypeUseCase } from './use-cases/list-all-feedbacks-by-type.use-case';
import { ListAllFeedbacksUseCase } from './use-cases/list-all-feedbacks.use-case';
import { ListFeedbackByUserUseCase } from './use-cases/list-feedback-by-user.use-case';

@ApiTags('feedbacks')
@Controller('feedbacks')
export class FeedbacksController {
  private readonly createFeedbackUseCase: CreateFeedbackUseCase;
  private readonly listFeedbacksByUserUseCase: ListFeedbackByUserUseCase;
  private readonly listAllFeedbacksUseCase: ListAllFeedbacksUseCase;
  private readonly listAllFeedbacksByTypeUseCase: ListAllFeedbacksByTypeUseCase;

  constructor(
    createFeedbackUseCase: CreateFeedbackUseCase,
    listFeedbacksByUserUseCase: ListFeedbackByUserUseCase,
    listAllFeedbacksUseCase: ListAllFeedbacksUseCase,
    listAllFeedbacksByTypeUseCase: ListAllFeedbacksByTypeUseCase
  ) {
    this.createFeedbackUseCase = createFeedbackUseCase;
    this.listFeedbacksByUserUseCase = listFeedbacksByUserUseCase;
    this.listAllFeedbacksUseCase = listAllFeedbacksUseCase;
    this.listAllFeedbacksByTypeUseCase = listAllFeedbacksByTypeUseCase;
  }

  @Post()
  async createFeedback(@Body() feedback: CreateFeedbackDTO): Promise<void> {
    await this.createFeedbackUseCase.execute(feedback);
  }

  @Get('/user-id:userId')
  async listFeedbackByUser(@Param("userId") userId: string) {
    return await this.listFeedbacksByUserUseCase.execute(userId);
  }

  @Get()
  async listAllFeedbacks(): Promise<Feedback[]> {
    return await this.listAllFeedbacksUseCase.execute();
  }

  @Get('feedback-type/:feedbackType')
  async listAllFeedbacksByType(@Param("feedbackType") feedbackType: FeedbackTypeEnum): Promise<Feedback[]> {
    return await this.listAllFeedbacksByTypeUseCase.execute(feedbackType);
  }
}
