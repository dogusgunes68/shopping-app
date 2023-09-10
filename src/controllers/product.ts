import { Request, Response } from "express";
import { createProduct, updateProduct } from "../services/product"; 
import { buildResponse } from "../services/http";

export async function createProductController(req: Request, res: Response): Promise<void> {
    try {
        const id = await createProduct(req.body);
        const response = buildResponse({
            message: "New Product created successfully",
            data: {
                productId: id,
            }
        })
        res.status(201).json(response)
    } catch (error: any) {                
        const response = buildResponse({
            success: false,
            message: error.message,
        })

        res.status(500).json(response);
    }
}

export async function updateProductController(req: Request, res: Response): Promise<void> {
    try {
        const count = await updateProduct(req.body.id, req.body.changes);
        const response = buildResponse({
            message: `${count} row updated successfully`,
        })
        res.status(200).json(response);
    } catch (error: any) {
        const response = buildResponse({
            success: false,
            message: error.message,
        })
        res.status(500).json(response);
    }
}