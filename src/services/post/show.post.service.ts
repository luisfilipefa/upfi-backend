import { HttpError } from "@errors/HttpError";
import { PostRepository } from "@repositories/post.repository";
import { UserRepository } from "@repositories/user.repository";
import { getCustomRepository } from "typeorm";

export class ShowPostService {
  async execute(authorId) {
    const postRepository = getCustomRepository(PostRepository);
    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.findOne(authorId);

    if (!userExists) throw new HttpError(404, "User not found");

    const posts = await postRepository.find({ author_id: authorId });

    return posts;
  }
}
