import { Request, Response, NextFunction, response } from "express";
import { ApiError } from "../errors/api-error";
import Joi from "joi";
import { buildResponse } from "../services/http";

export function validateBody(schema: Joi.ObjectSchema){
    return  (req: Request, res: Response, next: NextFunction) => {

        const {error, value} = schema.validate(req.body);
        if(error) {
            const response = buildResponse({
                success: false,
                message: error.message,
            });
            return res.status(400).json(response)
        }
        req.body = value;
        next();
    }
}