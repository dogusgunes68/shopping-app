import { Request, Response } from "express";
import { createCustomer, getDetailsOfOrder, listOrders } from "../services/customer";
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

export async function listOrdersController(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.cookies;
      const rows = await listOrders(id);
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
    const { id } = req.cookies;
      const order = await getDetailsOfOrder(parseInt(req.params.id), id);
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
