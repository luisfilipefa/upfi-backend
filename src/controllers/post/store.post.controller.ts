import { NextFunction, Request, Response } from "express";

import { StorePostService } from "@services/post/store.post.service";

export class StorePostController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const storePostService = new StorePostService();

      const { title, image } = req.body;

      const { id: author_id } = req.user;

      const post = await storePostService.execute({ title, image, author_id });

      return res.json(post);
    } catch (error) {
      next(error);
    }
  }
}
