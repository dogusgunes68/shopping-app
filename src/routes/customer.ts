import { createCustomerController, listOrdersController, getDetailsOfOrderController } from "../controllers/customer";
import { requireAdmin } from "../middlewares/requireAdmin";
import { requireCustomer } from "../middlewares/requireCustomer";
import { validateBody } from "../middlewares/validateBody";
import { customerValidation } from "../validation/validate-customer-body";
const express = require("express");
const router = express.Router();


router.post("/", validateBody(customerValidation), requireAdmin, createCustomerController);
router.get("/customer-orders", requireCustomer, listOrdersController);
router.get("/customer-order/:id",requireCustomer , getDetailsOfOrderController);

export default router;
