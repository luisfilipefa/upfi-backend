import { NextFunction, Request, Response } from "express";

import { EditPostService } from "@services/post/edit.post.service";

export class EditPostController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const editPostService = new EditPostService();

      const { id: postId } = req.params;

      const { id: userId } = req.user;

      const post = await editPostService.execute(postId, userId);

      return res.json(post);
    } catch (error) {
      next(error);
    }
  }
}
