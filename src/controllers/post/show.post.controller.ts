import { NextFunction, Request, Response } from "express";

import { ShowPostService } from "@services/post/show.post.service";

export class ShowPostController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const showPostService = new ShowPostService();

      const { authorId } = req.params;

      const posts = await showPostService.execute(authorId);

      return res.json(posts);
    } catch (error) {
      next(error);
    }
  }
}
