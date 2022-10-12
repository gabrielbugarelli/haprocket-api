import { CreateUserDTO } from "src/@core/domain/dtos/CreateUserDTO";
import { User } from "src/@core/domain/entities/User";
import { IUsersRepository } from "src/@core/domain/interfaces/repositories/IUsersRepository";
import { PrismaService } from "src/database/PrismaService";

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
        name: user.name
      }
    });
  }
}