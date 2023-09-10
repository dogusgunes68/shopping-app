import { Request, Response, NextFunction } from "express";
import { buildResponse } from "../services/http";

export function requireCustomer(req: Request, res: Response, next: NextFunction){
    if(req.headers.customer_id){
        next();
    }else {
        const response = buildResponse({
            success: false,
            message: "You must authorize with customer to create a new order."
        });
        return res.json(response);
    }

}