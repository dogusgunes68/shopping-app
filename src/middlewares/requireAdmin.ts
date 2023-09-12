import {Request, Response, NextFunction} from "express";
import { buildAuthResponse, buildResponse } from "../services/http";
import { verifyToken } from "../utils/helper";

export async function requireAdmin(req: Request, res: Response, next: NextFunction){
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
        const token = req.headers.authorization.split(" ")[1];
        // verify token and get admin data
        try {    
            const decoded = await verifyToken(token);
            if(!decoded){
                return res.status(403).json(buildAuthResponse({
                    success:false,
                    message: "Access denied",
                }));
            }
            // check if role is admin
            if (!decoded.user.role || decoded.user.role !== "admin"){
                console.log(decoded.user);

                return res.status(403).json(buildAuthResponse({
                    success:false,
                    message: "Access denied for role",
                }));
            }
            next();
        } catch (error: any) {
            const response = buildAuthResponse({
                success:false,
                message: error.message,
            });
            res.status(403).json(response);
        }
        
    }else {
        const response = buildResponse({
            success:false,
            message: "You must authenticate with admin role to create a new customer."
        })
        return res.status(403).json(response);
    }
}