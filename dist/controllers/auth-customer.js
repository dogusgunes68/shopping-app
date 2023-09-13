"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCustomerController = exports.loginCustomerController = void 0;
const http_1 = require("../services/http");
const auth_customer_1 = require("../services/auth-customer");
function loginCustomerController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = yield (0, auth_customer_1.loginCustomer)(req.body);
            if (!token) {
                const response = (0, http_1.buildAuthResponse)({
                    success: false,
                    message: "Authentication failed"
                });
                res.status(401).json(response);
            }
            else {
                const response = (0, http_1.buildAuthResponse)({
                    message: "Authentication successful",
                    token
                });
                res.status(200).json(response);
            }
        }
        catch (error) {
            const response = (0, http_1.buildAuthResponse)({
                success: false,
                message: error.message,
            });
            res.status(500).json(response);
        }
    });
}
exports.loginCustomerController = loginCustomerController;
function registerCustomerController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = yield (0, auth_customer_1.registerCustomer)(req.body);
            const response = (0, http_1.buildResponse)({
                message: "Customer registration successfully",
                data: {
                    customerId: id,
                }
            });
            res.status(200).json(response);
        }
        catch (error) {
            const response = (0, http_1.buildResponse)({
                success: false,
                message: error.message,
            });
            res.status(500).json(response);
        }
    });
}
exports.registerCustomerController = registerCustomerController;
