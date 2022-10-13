import { IsDate, IsUUID } from 'class-validator';
import { v4 as uuid } from 'uuid';

export class BaseEntity {

  @IsUUID()
  id?: string;

  @IsDate()
  createdAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
      this.createdAt = new Date();
    }
  }
}