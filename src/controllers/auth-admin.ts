import { Request, Response } from "express";
import { loginAdmin } from "../services/auth-admin";
import { buildAuthResponse, buildResponse } from "../services/http";
import { registerAdmin } from "../services/auth-admin";
import tryCatch from "../utils/tryCatch";
import { ApiError } from "../errors/ApiError";

export const loginAdminController = tryCatch(
  async (req: Request, res: Response) => {
    const token = await loginAdmin(req.body);
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

export const registerAdminController = tryCatch(
  async (req: Request, res: Response) => {
    const id = await registerAdmin(req.body);
    const response = buildResponse({
      message: "Admin registration successfully",
      data: {
        adminId: id,
      },
    });
    res.status(200).json(response);
  }
);
