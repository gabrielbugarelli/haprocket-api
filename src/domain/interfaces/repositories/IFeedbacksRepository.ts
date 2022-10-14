import { CreateFeedbackDTO } from "src/domain/dtos/CreateFeedbackTDO";
import { Feedback } from "src/domain/entities/Feedback";

export interface IFeedbacksRepository {
  create(createFeedbackDTO: CreateFeedbackDTO): Promise<void>;
  listFeedbacksByUser(userId: string): Promise<Feedback[]>;
  listAllFeedbacks(): Promise<Feedback[]>;
}