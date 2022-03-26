import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const userSpecific = this.showUserProfileUseCase.execute({ user_id });

      return response.json(userSpecific);
    } catch (error) {
      return response.status(404).json({
        error: error.message,
      });
    }
  }
}

export { ShowUserProfileController };
