import { PostRepository } from "@repositories/post.repository";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

export class IndexPostService {
  async execute() {
    const postRepository = getCustomRepository(PostRepository);

    const posts = await postRepository.find({ relations: ["author"] });

    const orderedPosts = posts.sort((a, b) => b.likes.length - a.likes.length);

    return classToPlain(orderedPosts);
  }
}
