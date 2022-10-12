import { v4 as uuid } from 'uuid';

export class BaseEntity {
  id?: string;
  createdAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
      this.createdAt = new Date();
    }
  }
}