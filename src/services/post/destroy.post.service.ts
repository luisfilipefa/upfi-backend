import { HttpError } from "@errors/HttpError";
import { PostRepository } from "@repositories/post.repository";
import { getCustomRepository } from "typeorm";

export class DestroyPostService {
  async execute(postId: string) {
    const postRepository = getCustomRepository(PostRepository);

    const post = await postRepository.findOne(postId);

    if (!post) throw new HttpError(404, "Post not found");

    await postRepository.remove(post);
  }
}
