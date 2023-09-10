/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { hashPassword } = require("../../utils/helper");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("role").del();
  await knex("role").insert([
    { id: 1, name: "user" },
    { id: 2, name: "admin" },
  ]);
};
