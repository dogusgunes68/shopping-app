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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAdminController = exports.loginAdminController = void 0;
const auth_admin_1 = require("../services/auth-admin");
const http_1 = require("../services/http");
const auth_admin_2 = require("../services/auth-admin");
const tryCatch_1 = __importDefault(require("../utils/tryCatch"));
exports.loginAdminController = (0, tryCatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield (0, auth_admin_1.loginAdmin)(req.body);
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
}));
function registerAdminController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = yield (0, auth_admin_2.registerAdmin)(req.body);
            const response = (0, http_1.buildResponse)({
                message: "Admin registration successfully",
                data: {
                    adminId: id,
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
exports.registerAdminController = registerAdminController;
