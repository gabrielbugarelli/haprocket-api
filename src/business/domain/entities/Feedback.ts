import { FeedbackTypeEnum } from "../enums/FeedbackTypeEnum";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

export class Feedback extends BaseEntity {
  description: string;
  feedbackType: FeedbackTypeEnum;
  user: User;

  constructor() {
    super();
  }
}