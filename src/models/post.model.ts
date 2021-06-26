import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

import { User } from "./user.model";
import { v4 as uuid } from "uuid";

@Entity("posts")
export class Post {
  constructor() {
    if (!this.id) this.id = uuid();
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  author_id: string;

  @JoinColumn({ name: "author_id" })
  @ManyToOne(() => User)
  author: User;

  @Column("varchar", { array: true })
  likes: string[];

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
