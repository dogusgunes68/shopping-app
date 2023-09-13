import { Request, Response } from "express";
import {
  createCustomer,
  getDetailsOfOrder,
  listOrders,
} from "../services/customer";
import { buildResponse } from "../services/http";
import tryCatch from "../utils/tryCatch";
import { ApiError } from "../errors/ApiError";

export const createCustomerController = tryCatch(
  async (req: Request, res: Response) => {
    const id = await createCustomer(req.body);
    const response = buildResponse({
      message: "New customer created successfully",
      data: {
        customerId: id,
      },
    });
    res.status(201).json(response);
  }
);

export const listOrdersController = tryCatch(
  async (req: Request, res: Response) => {
    const { id } = req.headers;
    const rows = await listOrders(id);
    const response = buildResponse({
      message: "Orders retrieved successfully",
      data: {
        rows,
      },
    });

    res.status(200).json(response);
  }
);

export const getDetailsOfOrderController = tryCatch(
  async (req: Request, res: Response) => {
    const id = req.headers.id;
    const order = await getDetailsOfOrder(parseInt(req.params.id), id);
    if (!order) {
      throw new ApiError(404, "Order not found");
    }
    const response = buildResponse({
      message: `Order with id ${req.params.id} retrieved successfully`,
      data: {
        order,
      },
    });

    res.status(200).json(response);
  }
);
