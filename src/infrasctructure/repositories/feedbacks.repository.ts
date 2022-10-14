import { CreateFeedbackDTO } from "src/domain/dtos/CreateFeedbackTDO";
import { Feedback } from "src/domain/entities/Feedback";
import { FeedbackTypeEnum } from "src/domain/enums/FeedbackTypeEnum";
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
    let feedbacks: Feedback[] = [];

    const result = await this.repository.feedback.findMany({
      where: {
        fkIdUser: userId
      }
    });

    result.map(feedback => {
      let feedbackResult: Feedback = {
        id: feedback.id,
        description: feedback.description,
        userId: feedback.fkIdUser,
        userName: feedback.userName,
        createdAt: feedback.createdAt,
        feedbackType: FeedbackTypeEnum[feedback.feedbackType],
      }

      feedbacks.push(feedbackResult)
    });


    return feedbacks;
  }

  async listAllFeedbacks(): Promise<Feedback[]> {
    let feedbacks: Feedback[] = [];

    const result = await this.repository.feedback.findMany();

    result.map(feedback => {
      let feedbackResult: Feedback = {
        id: feedback.id,
        description: feedback.description,
        userId: feedback.fkIdUser,
        userName: feedback.userName,
        createdAt: feedback.createdAt,
        feedbackType: FeedbackTypeEnum[feedback.feedbackType],
      }

      feedbacks.push(feedbackResult)
    });

    return feedbacks;
  }
}