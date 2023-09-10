import { Request, Response } from "express";
import { createOrder, getDetailsOfOrder, listOrders } from "../services/order";
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

export async function listOrdersController(req: Request, res: Response): Promise<void> {
    try {
        const rows = await listOrders();
        const response = buildResponse({
            message:"Orders retrieved successfully",
            data: {
                rows,
            }
        });
        res.status(200).json(response);
    } catch (error: any) {

        const response = buildResponse({
            success: false,
            message: error.message
        });

        res.status(500).json(response);
        
    }
}

export async function getDetailsOfOrderController(req: Request, res: Response): Promise<void> {
    try {
        const order = await getDetailsOfOrder(parseInt(req.params.id));
        const response = buildResponse({
            message: `Order with id ${req.params.id} retrieved successfully`,
            data:{
                order,
            }
        });
        res.status(200).json(response);
    } catch (error: any) {
        const response = buildResponse({
            success: false,
            message: error.message
        });
        res.status(500).json(response);
    }
}
