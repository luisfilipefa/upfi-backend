export default {
  "type": "postgres",
  "host": process.env.DB_HOST || "localhost",
  "port": 5432,
  "username": process.env.DB_USER || "docker",
  "password": process.env.DB_PASSWORD || "docker",
  "database": process.env.DB_NAME || "docker",
  "extra": { "ssl": true },
  "migrations": ["./src/config/database/migrations/*.ts"],
  "entities": ["./src/models/*.ts"],
  "cli": {
    "entitiesDir": "./src/models",
    "migrationsDir": "./src/config/database/migrations"
  }
}
