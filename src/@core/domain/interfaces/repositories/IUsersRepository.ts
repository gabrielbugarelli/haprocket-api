import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export interface IUsersRepository {
  create(createUserDTO: CreateUserDTO): Promise<void>;
}