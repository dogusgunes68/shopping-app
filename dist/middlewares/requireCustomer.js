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
exports.requireCustomer = void 0;
const http_1 = require("../services/http");
const helper_1 = require("../utils/helper");
function requireCustomer(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            const token = req.headers.authorization.split(" ")[1];
            try {
                const decoded = yield (0, helper_1.verifyToken)(token);
                if (!decoded) {
                    return res.status(403).json((0, http_1.buildAuthResponse)({
                        success: false,
                        message: "Access denied",
                    }));
                }
                //check if role is user
                if (!decoded.user.role || decoded.user.role !== "user") {
                    return res.status(403).json((0, http_1.buildAuthResponse)({
                        success: false,
                        message: "Access denied for role",
                    }));
                }
                req.headers.id = decoded.user.id;
                next();
            }
            catch (error) {
                const response = (0, http_1.buildAuthResponse)({
                    success: false,
                    message: error.message,
                });
                res.status(403).json(response);
            }
        }
        else {
            const response = (0, http_1.buildResponse)({
                success: false,
                message: "You must authorize with customer to create a new order."
            });
            return res.status(403).json(response);
        }
    });
}
exports.requireCustomer = requireCustomer;
