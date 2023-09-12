import { Request, Response } from "express";
import { createOrder } from "../services/order";
import { buildResponse } from "../services/http";
import { Log } from "../models/log";
import { createLog } from "../services/log";

export async function createOrderController(req: Request, res: Response): Promise<void> {
    try {
        const id = await createOrder({ customer_id: req.headers.id, ...req.body});
        const response = buildResponse({
            message: "Order created successfully",
            data: {
                orderId: id
            }
        });

        const log: Log ={
            user_id: req.headers.id,
            request_type: "GET",
            request_url: "/orders/customer-orders",
            date: new Date()
          }
        await createLog(log);

        res.status(201).json(response);
    } catch (error: any) {
        const response = buildResponse({
            success: false,
            message: error.message,
        });

        res.status(500).json(response);
    }
}


