import { AuthenticationMiddleware } from "src/middlewares/authentication.middleware";
import { DestroyPostController } from "@controllers/post/destroy.post.controller";
import { EditPostController } from "@controllers/post/edit.post.controller";
import { IndexPostController } from "@controllers/post/index.post.controller";
import { Route } from "@interfaces/route.interface";
import { Router } from "express";
import { ShowPostController } from "@controllers/post/show.post.controller";
import { StorePostController } from "@controllers/post/store.post.controller";
import multer from "multer";
import { multerConfig } from "@config/multer";

export class PostRoutes implements Route {
  public path = "/post";
  public router = Router();
  public authenticationMiddleware = new AuthenticationMiddleware();
  public storePostController = new StorePostController();
  public indexPostController = new IndexPostController();
  public editPostController = new EditPostController();
  public destroyPostController = new DestroyPostController();
  public showPostController = new ShowPostController();

  constructor() {
    this.router.post(
      `${this.path}`,
      this.authenticationMiddleware.check,
      multer(multerConfig).single("file"),
      this.storePostController.handle
    );
    this.router.get(`${this.path}`, this.indexPostController.handle);
    this.router.patch(
      `${this.path}/:id`,
      this.authenticationMiddleware.check,
      this.editPostController.handle
    );
    this.router.delete(
      `${this.path}/:id`,
      this.authenticationMiddleware.check,
      this.destroyPostController.handle
    );
    this.router.get(`${this.path}/:authorId`, this.showPostController.handle);
  }
}
