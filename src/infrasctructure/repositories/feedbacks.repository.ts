import { CreateFeedbackDTO } from "src/domain/dtos/CreateFeedbackTDO";
import { Feedback } from "src/domain/entities/Feedback";
import { FeedbackTypeEnum } from "src/domain/enums/FeedbackTypeEnum";
import { IFeedbacksRepository } from "src/domain/interfaces/repositories/IFeedbacksRepository";
import { PrismaService } from "../database/PrismaService";
import { handleFeedbackData } from "../utils/handlFeedbackData";

export class FeedbacksRepository implements IFeedbacksRepository {
  private readonly repository: PrismaService;
  private static INSTANCE: FeedbacksRepository;

  constructor(repository: PrismaService) {
    this.repository = repository;
  }

  public static getInstance() {
    const prismaRepository = new PrismaService();

    if (!FeedbacksRepository.INSTANCE) {
      FeedbacksRepository.INSTANCE = new FeedbacksRepository(prismaRepository);
    }

    return FeedbacksRepository.INSTANCE;
  }

  async create(createFeedbackDTO: CreateFeedbackDTO): Promise<void> {
    const { description, feedbackType, userId, userName } = createFeedbackDTO;
    const feedback = new Feedback(description, feedbackType, userId, userName);

    await this.repository.feedback.create({
      data: {
        id: feedback.id,
        createdAt: feedback.createdAt,
        description: feedback.description,
        feedbackType: String(feedback.feedbackType),
        userName: feedback.userName,
        user: {
          connect: {
            id: feedback.userId
          }
        }
      }
    });
  }

  async listFeedbacksByUser(userId: string): Promise<Feedback[]> {
    const result = await this.repository.feedback.findMany({
      where: {
        fkIdUser: userId
      }
    });

    const feedbacks = handleFeedbackData(result);
    return feedbacks;
  }

  async listAllFeedbacks(): Promise<Feedback[]> {
    const result = await this.repository.feedback.findMany();

    const feedbacks = handleFeedbackData(result);
    return feedbacks;
  }

  async listAllFeedbacksByType(feedbackType: FeedbackTypeEnum): Promise<Feedback[]> {
    const result = await this.repository.feedback.findMany({
      where: {
        feedbackType: feedbackType
      }
    });

    const feedbacks = handleFeedbackData(result);
    return feedbacks;
  }

  async listFeedbackById(id: string): Promise<Feedback> {
    const result = await this.repository.feedback.findUnique({
      where: { id }
    })

    let feedback: Feedback = {
      description: result?.description,
      feedbackType: FeedbackTypeEnum[result?.feedbackType],
      userId: result?.fkIdUser,
      userName: result?.userName,
      id: result?.id,
      createdAt: result?.createdAt
    }

    return feedback;
  }

  async deleteFeedback(id: string): Promise<void> {
    await this.repository.feedback.delete({
      where: { id }
    })
  }
}