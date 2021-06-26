import { NextFunction, Request, Response } from "express";

import { IndexPostService } from "@services/post/index.post.service";

export class IndexPostController {
  async handle(_req: Request, res: Response, next: NextFunction) {
    try {
      const indexPostService = new IndexPostService();

      const posts = await indexPostService.execute();

      return res.json(posts);
    } catch (error) {
      next(error);
    }
  }
}
