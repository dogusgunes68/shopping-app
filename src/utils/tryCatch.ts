import { Request, Response, NextFunction, RequestHandler } from "express";

export default function tryCatch(controller: RequestHandler): RequestHandler {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await controller(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
}
