import { host, name, port, password, user } from "../config/database";
import { Sequelize } from "sequelize-typescript";

export default new Sequelize({
  dialect: "postgres",
  host: host,
  port: port,
  database: name,
  username: user,
  password: password,
});
