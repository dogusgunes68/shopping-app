import db from "../database/db";
import { Log } from "../models/log";
import { Order } from "../models/order";
import { createLog } from "./log";

export async function createOrder(order: Order): Promise<number[]> {
  const [id] = await db("order").insert(order).returning("id");
  const log: Log = {
    user_id: order.customer_id,
    request_type: "POST",
    request_url: "/orders",
    date: new Date(),
  };

  await createLog(log);
  return id;
}
