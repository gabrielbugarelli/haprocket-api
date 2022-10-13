import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "../../entities/User";

export interface IUsersRepository {
  create(createUserDTO: CreateUserDTO): Promise<void>;
  listUsers(): Promise<User[]>;
  findUser(userId: string): Promise<User>;
}