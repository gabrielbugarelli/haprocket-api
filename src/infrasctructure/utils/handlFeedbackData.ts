import { Feedback } from "src/domain/entities/Feedback";
import { Feedback as FeedbackEntityPrisma } from "@prisma/client";
import { FeedbackTypeEnum } from "src/domain/enums/FeedbackTypeEnum";

export const handleFeedbackData = (feedbackEntityPrisma: FeedbackEntityPrisma[]): Feedback[] => {
  let feedbacks: Feedback[] = [];

  feedbackEntityPrisma.map(feedback => {
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