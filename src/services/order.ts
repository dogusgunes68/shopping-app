import db from "../database/db";
import { Order } from "../models/order";


export async function createOrder(order: Order): Promise<number[]> {
    const [id] = await db("order").insert(order).returning("id");

    return id;
}