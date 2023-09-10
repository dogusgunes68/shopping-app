/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("customer", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("surname").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.string("role").defaultTo("user");
      table.timestamps(true, true);
    })
    .createTable("product", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("price").notNullable();
      table.string("description").notNullable();
      table.timestamps(true, true);
    })
    .createTable("order", (table) => {
      table.increments("id").primary();
      table.integer("count").defaultTo(1);
      table.integer("product_id").references("id").inTable("product");
      table.integer("customer_id").references("id").inTable("customer");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema
    .dropTable("customer")
    .dropTable("order")
    .dropTable("role")
    .dropTable("product");
};
