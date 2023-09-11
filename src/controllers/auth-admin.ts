import {Request, Response} from 'express'
import { loginAdmin } from '../services/auth-admin'
import { buildAuthResponse, buildResponse } from '../services/http';
import { registerAdmin } from '../services/auth-admin';
export async function loginAdminController(req: Request, res: Response): Promise<void> {
    try {
        const token = await loginAdmin(req.body);
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

export async function registerAdminController(req: Request, res: Response): Promise<void> {
    try {
        const id = await registerAdmin(req.body);
        const response = buildResponse({
            message:"Admin registration successfully",
            data: {
                adminId: id,
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