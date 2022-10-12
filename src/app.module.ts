import { Module } from '@nestjs/common';
import { UsersModule } from './application/users/users.module';

@Module({
  imports: [UsersModule]
})
export class AppModule { }
