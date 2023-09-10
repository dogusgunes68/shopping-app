"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield knex.schema
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
            table.integer("product_id").references("id").inTable("product");
            table.integer("customer_id").references("id").inTable("customer");
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield knex.schema
            .dropTable("customer")
            .dropTable("order")
            .dropTable("role")
            .dropTable("product");
    });
}
exports.down = down;
