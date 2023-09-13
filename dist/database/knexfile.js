"use strict";
// Update with your config settings.
Object.defineProperty(exports, "__esModule", { value: true });
const knexConfig = {
    development: {
        client: "pg",
        connection: {
            database: "shopping",
            user: "root",
            password: "root",
            host: "db",
            port: 5432,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./migrations/",
            tableName: "knex_migrations",
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
exports.default = knexConfig;
