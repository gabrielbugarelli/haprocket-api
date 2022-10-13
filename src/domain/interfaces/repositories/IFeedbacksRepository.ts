import { CreateFeedbackDTO } from "src/domain/dtos/CreateFeedbackTDO";

export interface IFeedbacksRepository {
  create(createFeedbackDTO: CreateFeedbackDTO): Promise<void>
}