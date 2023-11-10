import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User doesnt exist");
    }

    if (user.admin === false) {
      throw new Error("User isnt admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
