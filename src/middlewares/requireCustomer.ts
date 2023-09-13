import { Request, Response, NextFunction } from "express";
import { buildAuthResponse, buildResponse } from "../services/http";
import { verifyToken } from "../utils/helper";
import tryCatch from "../utils/tryCatch";
import { ApiError } from "../errors/ApiError";

export const requireCustomer = tryCatch(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];

      const decoded = await verifyToken(token);
      if (!decoded) {
        throw new ApiError(403, "Access denied");
      }
      //check if role is user
      if (!decoded.user.role || decoded.user.role !== "user") {
        throw new ApiError(403, "Access denied for role");
      }

      req.headers.id = decoded.user.id;
      next();
  } else {
    const response = buildResponse({
      success: false,
      message: "You must authorize with customer to create a new order.",
    });
    return res.status(403).json(response);
  }
});
