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
exports.requireAdmin = void 0;
const http_1 = require("../services/http");
const helper_1 = require("../utils/helper");
function requireAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            const token = req.headers.authorization.split(" ")[1];
            // verify token and get admin data and check if role is admin
            const decoded = yield (0, helper_1.verifyToken)(token);
            console.log("decoded admin", decoded);
            if (!decoded) {
                return res.status(403).json((0, http_1.buildAuthResponse)({
                    success: false,
                    message: "Access denied",
                }));
            }
            next();
        }
        else {
            const response = (0, http_1.buildResponse)({
                success: false,
                message: "You must authenticate with admin role to create a new customer."
            });
            return res.status(403).json(response);
        }
    });
}
exports.requireAdmin = requireAdmin;
