import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedbackDTO } from 'src/domain/dtos/CreateFeedbackTDO';
import { Feedback } from 'src/domain/entities/Feedback';
import { FeedbackTypeEnum } from 'src/domain/enums/FeedbackTypeEnum';
import { CreateFeedbackUseCase } from './use-cases/create-feedback.use-case';
import { DeleteFeedbackUseCase } from './use-cases/delete-feedback.use-case';
import { ListAllFeedbacksByTypeUseCase } from './use-cases/list-all-feedbacks-by-type.use-case';
import { ListAllFeedbacksUseCase } from './use-cases/list-all-feedbacks.use-case';
import { ListFeedbackByIdUseCase } from './use-cases/list-feedback-by-id.use-case';
import { ListFeedbackByUserUseCase } from './use-cases/list-feedback-by-user.use-case';

@ApiTags('feedbacks')
@Controller('feedbacks')
export class FeedbacksController {
  private readonly createFeedbackUseCase: CreateFeedbackUseCase;
  private readonly listFeedbacksByUserUseCase: ListFeedbackByUserUseCase;
  private readonly listAllFeedbacksUseCase: ListAllFeedbacksUseCase;
  private readonly listAllFeedbacksByTypeUseCase: ListAllFeedbacksByTypeUseCase;
  private readonly listFeedbackByIdUseCase: ListFeedbackByIdUseCase;
  private readonly deleteFeedbackUseCase: DeleteFeedbackUseCase;

  constructor(
    createFeedbackUseCase: CreateFeedbackUseCase,
    listFeedbacksByUserUseCase: ListFeedbackByUserUseCase,
    listAllFeedbacksUseCase: ListAllFeedbacksUseCase,
    listAllFeedbacksByTypeUseCase: ListAllFeedbacksByTypeUseCase,
    listFeedbackByIdUseCase: ListFeedbackByIdUseCase,
    deleteFeedbackUseCase: DeleteFeedbackUseCase
  ) {
    this.createFeedbackUseCase = createFeedbackUseCase;
    this.listFeedbacksByUserUseCase = listFeedbacksByUserUseCase;
    this.listAllFeedbacksUseCase = listAllFeedbacksUseCase;
    this.listAllFeedbacksByTypeUseCase = listAllFeedbacksByTypeUseCase;
    this.listFeedbackByIdUseCase = listFeedbackByIdUseCase;
    this.deleteFeedbackUseCase = deleteFeedbackUseCase
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

  @Get(':id')
  async listFeedbackById(@Param('id') id: string): Promise<Feedback> {
    return await this.listFeedbackByIdUseCase.execute(id);
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteFeedback(@Param('id') id: string): Promise<string> {
    await this.deleteFeedbackUseCase.execute(id);

    return 'Feedback deleted with success';
  }
}
