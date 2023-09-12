import {Request, Response} from 'express'
import { buildAuthResponse, buildResponse } from '../services/http';
import { loginCustomer, registerCustomer } from '../services/auth-customer';
export async function loginCustomerController(req: Request, res: Response): Promise<void> {
    try {
        const token = await loginCustomer(req.body);        
        if (!token) {
            const response = buildAuthResponse({
                success: false,
                message: "Authentication failed"
            });
            res.status(401).json(response);
        }else {
            const response = buildAuthResponse({
                message: "Authentication successful",
                token
            })
            res.status(200).json(response);
        }
    } catch (error: any) {
        const response = buildAuthResponse({
            success: false,
            message: error.message,
        });
        res.status(500).json(response);
    }
}

export async function registerCustomerController(req: Request, res: Response): Promise<void> {
    try {
        const id = await registerCustomer(req.body);
        const response = buildResponse({
            message:"Customer registration successfully",
            data: {
                customerId: id,
            }
        });
        res.status(200).json(response);
    } catch (error: any) {
        const response = buildResponse({
            success: false,
            message: error.message,
        });
        res.status(500).json(response);
    }
}