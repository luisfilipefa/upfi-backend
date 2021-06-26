import { HttpError } from "@errors/HttpError";
import { UserRepository } from "@repositories/user.repository";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

interface ICreateUserParams {
  name: string;
  avatar: string;
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, avatar, email, password }: ICreateUserParams) {
    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.findOne({ email });

    if (userExists) throw new HttpError(409, "User already exists");

    const user = await userRepository.create({ name, avatar, email, password });

    await userRepository.save(user);

    return classToPlain(user);
  }
}
