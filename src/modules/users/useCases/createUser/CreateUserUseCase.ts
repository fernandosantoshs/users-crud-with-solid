import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyExists = this.usersRepository.findByEmail(email);

    if (alreadyExists) {
      throw new Error("Email alredy taken");
    }

    const user = this.usersRepository.create({ name, email });
    console.log(user.id);

    return user;
  }
}

export { CreateUserUseCase };
