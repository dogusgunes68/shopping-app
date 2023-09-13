import { Request, Response, NextFunction } from "express";
import { buildAuthResponse, buildResponse } from "../services/http";
import { verifyToken } from "../utils/helper";
import { ApiError } from "../errors/ApiError";
import tryCatch from "../utils/tryCatch";

export const requireAdmin = tryCatch(async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    // verify token and get admin data
      const decoded = await verifyToken(token);
      if (!decoded) {
        throw new ApiError(403, "Access denied");
      }
      // check if role is admin
      if (!decoded.user.role || decoded.user.role !== "admin") {
        throw new ApiError(403, "Access denied for role");
      }
      next();
  } else {
    const response = buildResponse({
      success: false,
      message:
        "You must authenticate with admin role to create a new customer.",
    });
    return res.status(403).json(response);
  }
});
