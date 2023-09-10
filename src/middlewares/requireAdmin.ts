import {Request, Response, NextFunction} from "express";
import { buildResponse } from "../services/http";

export async function requireAdmin(req: Request, res: Response, next: NextFunction){
    if(req.headers.role && req.headers.role === "admin"){
        next();
    }else {
        const response = buildResponse({
            success:false,
            message: "You must authenticate with admin role to create a new customer."
        })
        return res.status(401).json(response);
    }
}