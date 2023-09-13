import { Request, Response, NextFunction, response } from "express";
import Joi from "joi";

export function validateBody(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      throw error;
    }
    req.body = value;
    next();
  };
}
