const db = require("../database/db");
const dotenv = require("dotenv");
dotenv.config();

exports.createCustomer = async function (customer) {
  console.log("user", process.env.USER);
  const { name, surname, email, password, role } = customer;
  const id = await db("customer")
    .insert({
      name,
      surname,
      email,
      password,
      role,
    })
    .returning("id");

  return id;
};
