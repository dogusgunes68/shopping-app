const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer");

router.post("/", customerController.createCustomer);

export default router;
