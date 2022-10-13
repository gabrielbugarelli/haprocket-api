import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFeedbackDTO } from 'src/domain/dtos/CreateFeedbackTDO';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';

@Controller('feedbacks')
export class FeedbacksController {
  private readonly createFeedbackUseCase: CreateFeedbackUseCase;

  constructor(createFeedbackUseCase: CreateFeedbackUseCase) {
    this.createFeedbackUseCase = createFeedbackUseCase;
  }

  @Post()
  async createFeedback(@Body() feedback: CreateFeedbackDTO): Promise<void> {
    await this.createFeedbackUseCase.execute(feedback);
  }

  @Get()
  ping() {
    return "poing";
  }
}
