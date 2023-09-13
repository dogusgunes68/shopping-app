import { Request, Response } from "express";
import { buildAuthResponse, buildResponse } from "../services/http";
import { loginCustomer, registerCustomer } from "../services/auth-customer";
import tryCatch from "../utils/tryCatch";
import { ApiError } from "../errors/ApiError";
export const loginCustomerController = tryCatch(
  async (req: Request, res: Response) => {
    const token = await loginCustomer(req.body);
    if (!token) {
      throw new ApiError(401, "Token does not exist");
    }
    const response = buildAuthResponse({
      message: "Authentication successful",
      token,
    });
    res.status(200).json(response);
  }
);

export const registerCustomerController = tryCatch(
  async (req: Request, res: Response) => {
    const id = await registerCustomer(req.body);
    const response = buildResponse({
      message: "Customer registration successfully",
      data: {
        customerId: id,
      },
    });
    res.status(200).json(response);
  }
);
