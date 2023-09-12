import { createProductController, updateProductController } from "../controllers/product";
import { validateBody } from "../middlewares/validateBody";
import { productValidation } from "../validation/validate-product-body";
const express = require("express");
const router = express.Router();

router.post("/",validateBody(productValidation) ,createProductController);
router.put("/:id",updateProductController);

export default router;