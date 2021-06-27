import { NextFunction, Request, Response } from "express";

import { DestroyPostService } from "@services/post/destroy.post.service";

export class DestroyPostController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const destroyPostService = new DestroyPostService();

      const { id } = req.params;

      await destroyPostService.execute(id);

      return res.end();
    } catch (error) {
      next(error);
    }
  }
}
