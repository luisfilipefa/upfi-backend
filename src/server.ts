import { App } from "./app";
import { PostRoutes } from "@routes/post.routes";
import { SessionRoutes } from "@routes/session.routes";
import { UserRoutes } from "@routes/user.routes";
import dotenv from "dotenv";

dotenv.config();

const app = new App([new UserRoutes(), new SessionRoutes(), new PostRoutes()]);

app.listen();
