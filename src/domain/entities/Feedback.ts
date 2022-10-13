import { FeedbackTypeEnum } from "../enums/FeedbackTypeEnum";
import { BaseEntity } from "./BaseEntity";

export class Feedback extends BaseEntity {
  description: string;
  feedbackType: FeedbackTypeEnum;
  userId: string;

  constructor(description: string, feedbackType: FeedbackTypeEnum, userId: string) {
    super();

    this.description = description;
    this.feedbackType = feedbackType;
    this.userId = userId;
  }
}