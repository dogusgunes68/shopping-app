import Customer, {CustomerMap} from "../database/models/customer";
import connection from "../database/connection";
import { Request, Response } from "express";

import { Router } from "express";

const router : Router = Router();

router.post("/", async (req: Request, res: Response) =>{
    try {
        CustomerMap(connection);
        const result = await Customer.create(req.body);
        res.json({
            success: true,
            data: result
        })
    } catch (error) {
        throw error;
    }
 
})

export default router;