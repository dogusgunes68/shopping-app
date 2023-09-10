import { Request, Response, NextFunction } from "express";
import { ApiError } from "./api-error";
import { buildResponse } from "../services/http";

export function apiErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {

    if (err instanceof ApiError) {
        const response = buildResponse({
            success: false,
            message: err.message,
        })       
       return res.status(400).json(response);
    }
    const response = buildResponse({
        success: false,
        message: err.message,
    })
    return res.status(500).json(response);

}