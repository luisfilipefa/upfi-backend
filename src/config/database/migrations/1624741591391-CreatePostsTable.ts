import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePostsTable1624741591391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "posts",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "author_id",
            type: "uuid",
          },
          {
            name: "likes",
            type: "varchar",
            isArray: true,
            default: "array[]::varchar[]",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FK_users_posts",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["author_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("posts");
  }
}
