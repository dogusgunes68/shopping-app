import { createCustomerController } from "../controllers/customer";
import { requireAdmin } from "../middlewares/requireAdmin";
import { validateBody } from "../middlewares/validateBody";
import { customerValidation } from "../validation/validate-customer-body";
const express = require("express");
const router = express.Router();


router.post("/", validateBody(customerValidation), requireAdmin, createCustomerController);

export default router;
