import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(/* { }: IRequest */): User[] {
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
