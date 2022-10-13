import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedbackDTO } from 'src/domain/dtos/CreateFeedbackTDO';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';
import { ListFeedbackByUserUseCase } from './use-cases/list-feedback-by-user.use-case';

@ApiTags('feedbacks')
@Controller('feedbacks')
export class FeedbacksController {
  private readonly createFeedbackUseCase: CreateFeedbackUseCase;
  private readonly listFeedbacksByUserUseCase: ListFeedbackByUserUseCase;

  constructor(
    createFeedbackUseCase: CreateFeedbackUseCase,
    listFeedbacksByUserUseCase: ListFeedbackByUserUseCase
  ) {
    this.createFeedbackUseCase = createFeedbackUseCase;
    this.listFeedbacksByUserUseCase = listFeedbacksByUserUseCase;
  }

  @Post()
  async createFeedback(@Body() feedback: CreateFeedbackDTO): Promise<void> {
    await this.createFeedbackUseCase.execute(feedback);
  }

  @Get(':userId')
  async listFeedbackByUser(@Param("userId") userId: string) {
    return await this.listFeedbacksByUserUseCase.execute(userId);
  }
}
