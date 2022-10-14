import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedbackDTO } from 'src/domain/dtos/CreateFeedbackTDO';
import { Feedback } from 'src/domain/entities/Feedback';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';
import { ListAllFeedbacksUseCase } from './use-cases/list-all-feedbacks.use-case';
import { ListFeedbackByUserUseCase } from './use-cases/list-feedback-by-user.use-case';

@ApiTags('feedbacks')
@Controller('feedbacks')
export class FeedbacksController {
  private readonly createFeedbackUseCase: CreateFeedbackUseCase;
  private readonly listFeedbacksByUserUseCase: ListFeedbackByUserUseCase;
  private readonly listAllFeedbacksUseCase: ListAllFeedbacksUseCase;

  constructor(
    createFeedbackUseCase: CreateFeedbackUseCase,
    listFeedbacksByUserUseCase: ListFeedbackByUserUseCase,
    listAllFeedbacksUseCase: ListAllFeedbacksUseCase
  ) {
    this.createFeedbackUseCase = createFeedbackUseCase;
    this.listFeedbacksByUserUseCase = listFeedbacksByUserUseCase;
    this.listAllFeedbacksUseCase = listAllFeedbacksUseCase;
  }

  @Post()
  async createFeedback(@Body() feedback: CreateFeedbackDTO): Promise<void> {
    await this.createFeedbackUseCase.execute(feedback);
  }

  @Get(':userId')
  async listFeedbackByUser(@Param("userId") userId: string) {
    return await this.listFeedbacksByUserUseCase.execute(userId);
  }

  @Get()
  async listAllFeedbacks(): Promise<Feedback[]> {
    return await this.listAllFeedbacksUseCase.execute();
  }
}
