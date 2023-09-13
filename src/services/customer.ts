import db from "../database/db";
import { hashPassword } from "../utils/helper";
import bcrypt from "bcrypt";
import { Customer } from "../models/customer";
import { Order } from "sequelize";
import { Log } from "../models/log";
import { createLog } from "./log";

export async function createCustomer(customer: Customer): Promise<number[]> {
  const { name, surname, email, password, role } = customer;
  const hashedPass = await hashPassword(password);
  const [id] = await db("customer")
    .insert({
      name,
      surname,
      email,
      password: hashedPass,
      role,
    })
    .returning("id");

  return id;
}

export async function getCustomer(email: string): Promise<Customer> {
  const [customer] = await db("customer").select("*").where("email", email);

  return customer;
}

export async function checkPasswordForCustomer(
  password: string,
  email: string
): Promise<boolean> {
  const customer = await getCustomer(email);
  return await bcrypt.compare(password, customer.password);
}

export async function listOrders(customerId: any): Promise<Order[]> {
  const rows: Order[] = await db("order")
    .select("*")
    .where("customer_id", customerId);
  const log: Log = {
    user_id: customerId,
    request_type: "GET",
    request_url: "/orders/customer-orders",
    date: new Date(),
  };
  await createLog(log);
  return rows;
}

export async function getDetailsOfOrder(
  orderId: number,
  customer_id: any
): Promise<Order> {
  const order: Order[] = await db("order")
    .select("*")
    .where("id", orderId)
    .andWhere("customer_id", customer_id);
  const log: Log = {
    user_id: customer_id,
    request_type: "GET",
    request_url: `/orders/customer-order/${orderId}`,
    date: new Date(),
  };
  await createLog(log);
  return order[0];
}
