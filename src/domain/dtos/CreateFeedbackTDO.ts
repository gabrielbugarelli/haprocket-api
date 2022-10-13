import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { FeedbackTypeEnum } from "../enums/FeedbackTypeEnum";

export class CreateFeedbackDTO {

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(FeedbackTypeEnum)
  feedbackType: FeedbackTypeEnum;
}