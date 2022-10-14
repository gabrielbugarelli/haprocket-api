import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { FeedbackTypeEnum } from "../enums/FeedbackTypeEnum";

export class CreateFeedbackDTO {

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsEnum(FeedbackTypeEnum)
  @ApiProperty({
    enum: FeedbackTypeEnum,
    description: 'O tipo do feedback deve ser somente POSITIVE ou NEGATIVE',
    example: 'POSITIVE'
  })
  feedbackType: FeedbackTypeEnum;
}