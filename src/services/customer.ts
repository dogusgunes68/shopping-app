import db from "../database/db";
import { hashPassword } from "../utils/helper";
import bcrypt from "bcrypt";
import {Customer} from "../models/customer";
import { Order } from "sequelize";

export async function createCustomer(customer: Customer): Promise<number[]> {
  const { name, surname, email, password, role } = customer;
  const hashedPass = await hashPassword(password)
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

export async function checkPasswordForCustomer(password: string, email: string): Promise<boolean> {
  const customer = await getCustomer(email);
  return await bcrypt.compare(password, customer.password);
}

export async function listOrders(customerId: any): Promise<Order[]> {
  const rows: Order[] = await db("order").select("*").where("customer_id", customerId);
  return rows;
}

export async function getDetailsOfOrder(orderId: number, customer_id: number): Promise<Order[]> {
  const order: Order[] = await db("order").select("*").where("id", orderId).andWhere("customer_id", customer_id);
  return order;
}

