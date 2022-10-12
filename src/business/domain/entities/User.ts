import { BaseEntity } from "./BaseEntity";
import { Feedback } from "./Feedback";

export class User extends BaseEntity {
  name: string;
  feedbacks?: Feedback[];

  constructor(name: string) {
    super();

    this.name = name;
  }
}