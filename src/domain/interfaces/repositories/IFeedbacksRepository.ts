import { CreateFeedbackDTO } from "src/domain/dtos/CreateFeedbackTDO";
import { Feedback } from "src/domain/entities/Feedback";
import { FeedbackTypeEnum } from "src/domain/enums/FeedbackTypeEnum";

export interface IFeedbacksRepository {
  create(createFeedbackDTO: CreateFeedbackDTO): Promise<void>;
  listFeedbacksByUser(userId: string): Promise<Feedback[]>;
  listAllFeedbacks(): Promise<Feedback[]>;
  listAllFeedbacksByType(feedbackType: FeedbackTypeEnum): Promise<Feedback[]>;
}