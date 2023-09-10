import { Request, Response } from "express";
import { createCustomer } from "../services/customer";
import { buildResponse } from "../services/http";

export async function createCustomerController(req: Request, res: Response): Promise<void> {
  try {
    const id = await createCustomer(req.body);
    const response = buildResponse({
      message: "New customer created successfully",
      data: {
        customerId: id,
      }
    })
    res.status(201).json(response)
  } catch (error: any) {
    const response = buildResponse({
      success: false,
      message: error.message
    })
    res.status(500).json(response)
  }
};

