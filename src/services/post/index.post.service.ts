import { PostRepository } from "@repositories/post.repository";
import { getCustomRepository } from "typeorm";

export class IndexPostService {
  async execute() {
    const postRepository = getCustomRepository(PostRepository);

    const posts = await postRepository.find({ relations: ["author"] });

    const orderedPosts = posts.sort((a, b) => a.likes.length - b.likes.length);

    return orderedPosts;
  }
}
