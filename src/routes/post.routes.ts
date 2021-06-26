import { AuthenticationMiddleware } from "src/middlewares/authentication.middleware";
import { EditPostController } from "@controllers/post/edit.post.controller";
import { IndexPostController } from "@controllers/post/index.post.controller";
import { Route } from "@interfaces/route.interface";
import { Router } from "express";
import { StorePostController } from "@controllers/post/store.post.controller";

export class PostRoutes implements Route {
  public path = "/post";
  public router = Router();
  public authenticationMiddleware = new AuthenticationMiddleware();
  public storePostController = new StorePostController();
  public indexPostController = new IndexPostController();
  public editPostController = new EditPostController();

  constructor() {
    this.router.post(
      `${this.path}`,
      this.authenticationMiddleware.check,
      this.storePostController.handle
    );
    this.router.get(`${this.path}`, this.indexPostController.handle);
    this.router.patch(
      `${this.path}/:id`,
      this.authenticationMiddleware.check,
      this.editPostController.handle
    );
  }
}
