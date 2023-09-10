"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireCustomer = void 0;
const http_1 = require("../services/http");
function requireCustomer(req, res, next) {
    if (req.headers.customer_id) {
        next();
    }
    else {
        const response = (0, http_1.buildResponse)({
            success: false,
            message: "You must authorize with customer to create a new order."
        });
        return res.status(401).json(response);
    }
}
exports.requireCustomer = requireCustomer;
