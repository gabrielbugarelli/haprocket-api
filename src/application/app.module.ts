import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [UsersModule, FeedbacksModule]
})
export class AppModule { }
