import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).send(user);
    } catch (error) {
      return response.status(404).send({ error });
    }
  }
}

export { ShowUserProfileController };
