import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const checksExistsUserId = this.usersRepository.findById(user_id);

    if (!checksExistsUserId) {
      throw new Error("User id not found!");
    }

    return this.usersRepository.findById(user_id);
  }
}

export { ShowUserProfileUseCase };
