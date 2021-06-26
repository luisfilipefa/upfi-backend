import { AuthenticationMiddleware } from "src/middlewares/authentication.middleware";
import { Route } from "@interfaces/route.interface";
import { Router } from "express";
import { StorePostController } from "@controllers/post/store.post.controller";

export class PostRoutes implements Route {
  public path = "/post";
  public router = Router();
  public authenticationMiddleware = new AuthenticationMiddleware();
  public storePostController = new StorePostController();

  constructor() {
    this.router.post(
      `${this.path}`,
      this.authenticationMiddleware.check,
      this.storePostController.handle
    );
  }
}
