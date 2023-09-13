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
exports.createOrderController = void 0;
const order_1 = require("../services/order");
const http_1 = require("../services/http");
const log_1 = require("../services/log");
function createOrderController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = yield (0, order_1.createOrder)(Object.assign({ customer_id: req.headers.id }, req.body));
            const response = (0, http_1.buildResponse)({
                message: "Order created successfully",
                data: {
                    orderId: id
                }
            });
            const log = {
                user_id: req.headers.id,
                request_type: "POST",
                request_url: "/orders",
                date: new Date()
            };
            yield (0, log_1.createLog)(log);
            res.status(201).json(response);
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
exports.createOrderController = createOrderController;
