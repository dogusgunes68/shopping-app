import db from "../database/db";
import { Product } from "../models/product";

export async function createProduct(product: Product): Promise<number[]> {
  const { name, price, description } = product;
  const [id] = await db("product")
    .insert({
      name,
      price,
      description,
    })
    .returning("id");

  return id;
}

export async function updateProduct(id: number, changes: any): Promise<number> {
  const count = await db("product").where({ id }).update(changes);

  return count;
}
