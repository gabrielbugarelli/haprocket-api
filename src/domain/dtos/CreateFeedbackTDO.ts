import { FeedbackTypeEnum } from "../enums/FeedbackTypeEnum";

export class CreateFeedbackDTO {
  userId: string;
  description: string;
  feedbackType: FeedbackTypeEnum;
}