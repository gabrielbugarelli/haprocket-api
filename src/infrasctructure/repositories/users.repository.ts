import { CreateUserDTO } from "src/domain/dtos/CreateUserDTO";
import { User } from "src/domain/entities/User";
import { IUsersRepository } from "src/domain/interfaces/repositories/IUsersRepository";
import { PrismaService } from "src/infrasctructure/database/PrismaService";

export class UsersRepository implements IUsersRepository {
  private readonly repository: PrismaService;
  private static INSTANCE: UsersRepository;

  constructor(repository: PrismaService) {
    this.repository = repository;
  }

  public static getInstance(): UsersRepository {
    const prismaRepository = new PrismaService();

    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository(prismaRepository);
    }

    return UsersRepository.INSTANCE;
  }

  async create(createUserDTO: CreateUserDTO): Promise<void> {
    const user = new User(createUserDTO.name);

    await this.repository.user.create({
      data: {
        id: user.id,
        name: user.name,
        feedbacks: {
          connect: user.feedbacks
        }
      }
    });
  }

  async listUsers(): Promise<User[]> {
    const users = await this.repository.user.findMany();
    return users;
  }

  async findUser(userId: string): Promise<User> {
    const user = await this.repository.user.findUnique({ where: { id: userId } })
    return user;
  }

  async delete(userId: string): Promise<void> {
    await this.repository.user.delete({
      where: {
        id: userId
      }
    });
  }
}