import { Request, Response } from "express";
import { createOrder } from "../services/order";
import { buildResponse } from "../services/http";
import tryCatch from "../utils/tryCatch";

export const createOrderController = tryCatch(
  async (req: Request, res: Response) => {
    const id = await createOrder({ customer_id: req.headers.id, ...req.body });
    const response = buildResponse({
      message: "Order created successfully",
      data: {
        orderId: id,
      },
    });

    res.status(201).json(response);
  }
);
