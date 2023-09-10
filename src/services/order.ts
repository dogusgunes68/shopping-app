import db from "../database/db";



interface Order {
    count: number;
    product_id: number;
    customer_id: number;
}

export async function createOrder(order: Order): Promise<number[]> {
    const [id] = await db("order").insert(order).returning("id");

    return id;
}

export async function listOrders(): Promise<Order[]> {
    const rows: Order[] = await db("order").select("*");
    return rows;
}

export async function getDetailsOfOrder(orderId: number): Promise<Order[]> {
    const order: Order[] = await db("order").select("*").where("id", orderId);
    return order;
}