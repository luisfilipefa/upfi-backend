import { HttpError } from "@errors/HttpError";
import { Post } from "@models/post.model";
import { PostRepository } from "@repositories/post.repository";
import { getCustomRepository } from "typeorm";

export class EditPostService {
  async execute(postId: string, userId: string) {
    const postRepository = getCustomRepository(PostRepository);

    const post = await postRepository.findOne(postId);

    if (!post) throw new HttpError(404, "Post not found");

    let updatedPosts = {} as Post;

    if (post.likes.some((like) => like === userId)) {
      updatedPosts = {
        ...post,
        likes: post.likes.filter((like) => like !== userId),
      };
    } else {
      updatedPosts = {
        ...post,
        likes: [...post.likes, userId],
      };
    }

    await postRepository.save(updatedPosts);

    return updatedPosts;
  }
}
