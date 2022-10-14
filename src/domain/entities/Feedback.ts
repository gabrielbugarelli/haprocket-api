import { FeedbackTypeEnum } from "../enums/FeedbackTypeEnum";
import { BaseEntity } from "./BaseEntity";

export class Feedback extends BaseEntity {
  description: string;
  feedbackType: FeedbackTypeEnum;
  userId: string;
  userName: string;

  constructor(description: string, feedbackType: FeedbackTypeEnum, userId: string, userName: string) {
    super();

    this.description = description;
    this.feedbackType = feedbackType;
    this.userId = userId;
    this.userName = userName;
  }
}