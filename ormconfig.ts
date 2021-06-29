export default {
  "type": "postgres",
  "url": process.env.DATABASE_URL || "postgres://docker:docker@localhost:5432/docker",
  "migrations": ["./src/config/database/migrations/*.ts"],
  "entities": ["./src/models/*.ts"],
  "cli": {
    "entitiesDir": "./src/models",
    "migrationsDir": "./src/config/database/migrations"
  }
}