import { NextFunction, Request, Response } from "express";

import { StoreUserService } from "@services/user/store.user.service";

export class StoreUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const storeUserService = new StoreUserService();

      const { name, username, avatar, email, password } = req.body;

      const user = await storeUserService.execute({
        name,
        username,
        avatar,
        email,
        password,
      });

      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
