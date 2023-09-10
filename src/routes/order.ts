import express from "express";
import { createOrderController, listOrdersController, getDetailsOfOrderController } from "../controllers/order";
import { requireCustomer } from "../middlewares/requireCustomer";
import { validateBody } from "../middlewares/validateBody";
import { orderValidation } from "../validation/validate-order-body";
const router = express.Router();


router.post("/",validateBody(orderValidation) ,requireCustomer ,createOrderController);
router.get("/", listOrdersController);
router.get("/:id", getDetailsOfOrderController);

export default router;