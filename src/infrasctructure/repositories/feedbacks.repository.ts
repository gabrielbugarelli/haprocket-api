import { CreateFeedbackDTO } from "src/domain/dtos/CreateFeedbackTDO";
import { Feedback } from "src/domain/entities/Feedback";
import { IFeedbacksRepository } from "src/domain/interfaces/repositories/IFeedbacksRepository";
import { PrismaService } from "../database/PrismaService";

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
    const feedback = new Feedback(createFeedbackDTO.description, createFeedbackDTO.feedbackType, createFeedbackDTO.userId);

    await this.repository.feedback.create({
      data: {
        id: feedback.id,
        createdAt: feedback.createdAt,
        description: feedback.description,
        feedbackType: String(feedback.feedbackType),
        user: {
          connect: {
            id: feedback.userId
          }
        }
      }
    });
  }
}