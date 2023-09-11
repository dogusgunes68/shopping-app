import express from 'express';
import { loginAdminController, registerAdminController } from '../controllers/auth-admin';
import { loginCustomerController, registerCustomerController } from '../controllers/auth-customer';
import { validateBody } from '../middlewares/validateBody';
import { adminValidation } from '../validation/validate-admin-body';
import { customerValidation } from '../validation/validate-customer-body';
import { customerLoginValidation } from '../validation/validate-login-customer';
import { adminLoginValidation } from '../validation/validate-login-admin';
const router = express.Router();

router.post("/login-admin",validateBody(adminLoginValidation) ,loginAdminController);
router.post("/register-admin",validateBody(adminValidation) ,registerAdminController);

router.post("/login-customer",validateBody(customerLoginValidation) ,loginCustomerController);
router.post("/register-customer",validateBody(customerValidation), registerCustomerController);

export default router;