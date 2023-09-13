import { Request, Response, NextFunction } from "express";
import { ApiError } from "../errors/ApiError";
import { buildResponse } from "../services/http";

export function apiErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "ValidationError") {
    const response = buildResponse({
      success: false,
      message: err.message,
    });
    return res.status(400).json(response);
  }

  if (err instanceof ApiError) {
    const response = buildResponse({
      success: false,
      message: err.message,
    });
    return res.status(err.statusCode).json(response);
  }
  const response = buildResponse({
    success: false,
    message: "Internal Server Error",
  });
  return res.status(500).json(response);
}
