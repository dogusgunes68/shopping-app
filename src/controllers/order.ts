import { Request, Response } from "express";
import { createOrder } from "../services/order";
import { buildResponse } from "../services/http";

export async function createOrderController(req: Request, res: Response): Promise<void> {
    try {
        const id = await createOrder({ customer_id: req.headers.customer_id, ...req.body});
        const response = buildResponse({
            message: "Order created successfully",
            data: {
                orderId: id
            }
        });

        res.status(201).json(response);
    } catch (error: any) {
        const response = buildResponse({
            success: false,
            message: error.message,
        });

        res.status(500).json(response);
    }
}


