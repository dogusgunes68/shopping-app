import { Request, Response, NextFunction } from "express";
import { buildAuthResponse, buildResponse } from "../services/http";
import { verifyToken } from "../utils/helper";
import { getCustomer } from "../services/customer";

export async function requireCustomer(req: Request, res: Response, next: NextFunction){
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
        const token = req.headers.authorization.split(" ")[1];
        const decoded = await verifyToken(token);
        if (!decoded){
            return res.status(403).json(buildAuthResponse({
                success:false,
                message: "Access denied",
            }));
        }
        //check if role is user
        if (!decoded.user.role || decoded.user.role !== "user"){
            return res.status(403).json(buildAuthResponse({
                success:false,
                message: "Access denied for role",
            }));
        }
        const id = await getCustomer(decoded.user.email);
        req.cookies.id = id;
        next();
    }else {
        const response = buildResponse({
            success: false,
            message: "You must authorize with customer to create a new order."
        });
        return res.status(403).json(response);
    }

}