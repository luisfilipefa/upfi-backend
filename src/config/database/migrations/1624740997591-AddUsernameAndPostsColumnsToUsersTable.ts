import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUsernameAndPostsColumnsToUsersTable1624740997591
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("users", [
      new TableColumn({
        name: "username",
        type: "varchar",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("users", [
      new TableColumn({
        name: "username",
        type: "varchar",
      }),
    ]);
  }
}
