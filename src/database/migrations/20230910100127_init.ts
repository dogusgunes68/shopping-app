import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema
    .createTable("admin", (table) => {
      table.increments("id").primary();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.string("role").defaultTo("admin");
      table.timestamps(true, true);
    })
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
      table.string("name").notNullable().unique();
      table.integer("price").notNullable();
      table.string("description").notNullable();
      table.timestamps(true, true);
    })
    .createTable("order", (table) => {
      table.increments("id").primary();
      table.integer("count").defaultTo(1);
      table.integer("product_id").notNullable().references("id").inTable("product");
      table.integer("customer_id").notNullable().references("id").inTable("customer");
    })
    .createTable("logs", (table) => {
      table.increments("id").primary();
      table.integer("user_id").references("id").inTable("customer");
      table.string("request_type").notNullable();
      table.string("request_url").notNullable();
      table.dateTime("date").notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
   return await knex.schema
    .dropTable("customer")
    .dropTable("order")
    .dropTable("role")
    .dropTable("product");
}

