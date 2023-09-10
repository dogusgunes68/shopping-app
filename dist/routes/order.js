"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_1 = require("../controllers/order");
const requireCustomer_1 = require("../middlewares/requireCustomer");
const validateBody_1 = require("../middlewares/validateBody");
const validate_order_body_1 = require("../validation/validate-order-body");
const router = express_1.default.Router();
router.post("/", (0, validateBody_1.validateBody)(validate_order_body_1.orderValidation), requireCustomer_1.requireCustomer, order_1.createOrderController);
router.get("/", order_1.listOrdersController);
router.get("/:id", order_1.getDetailsOfOrderController);
exports.default = router;
