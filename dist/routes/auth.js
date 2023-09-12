"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_admin_1 = require("../controllers/auth-admin");
const auth_customer_1 = require("../controllers/auth-customer");
const validateBody_1 = require("../middlewares/validateBody");
const validate_admin_body_1 = require("../validation/validate-admin-body");
const validate_customer_body_1 = require("../validation/validate-customer-body");
const validate_login_customer_1 = require("../validation/validate-login-customer");
const validate_login_admin_1 = require("../validation/validate-login-admin");
const router = express_1.default.Router();
router.post("/login-admin", (0, validateBody_1.validateBody)(validate_login_admin_1.adminLoginValidation), auth_admin_1.loginAdminController);
router.post("/register-admin", (0, validateBody_1.validateBody)(validate_admin_body_1.adminValidation), auth_admin_1.registerAdminController);
router.post("/login-customer", (0, validateBody_1.validateBody)(validate_login_customer_1.customerLoginValidation), auth_customer_1.loginCustomerController);
router.post("/register-customer", (0, validateBody_1.validateBody)(validate_customer_body_1.customerValidation), auth_customer_1.registerCustomerController);
exports.default = router;
