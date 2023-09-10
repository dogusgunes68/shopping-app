import { user, password, database, host } from "../../config/database";

module.exports = {
  development: {
    username: user,
    password: password,
    database: database,
    host: host,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
