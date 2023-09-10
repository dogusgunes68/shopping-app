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
exports.createCustomerController = void 0;
const customer_1 = require("../services/customer");
const http_1 = require("../services/http");
function createCustomerController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = yield (0, customer_1.createCustomer)(req.body);
            const response = (0, http_1.buildResponse)({
                message: "New customer created successfully",
                data: {
                    customerId: id,
                }
            });
            res.status(201).json(response);
        }
        catch (error) {
            const response = (0, http_1.buildResponse)({
                success: false,
                message: error.message
            });
            res.status(500).json(response);
        }
    });
}
exports.createCustomerController = createCustomerController;
;
