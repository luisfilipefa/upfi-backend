import { PostRepository } from "@repositories/post.repository";
import { getCustomRepository } from "typeorm";

interface IStorePostParams {
  title: string;
  image: string;
  author_id: string;
}

export class StorePostService {
  async execute({ title, image, author_id }: IStorePostParams) {
    const postRepository = getCustomRepository(PostRepository);

    const post = await postRepository.create({ title, image, author_id });

    await postRepository.save(post);

    return post;
  }
}
