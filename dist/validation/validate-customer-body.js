"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.customerValidation = joi_1.default.object({
    email: joi_1.default.string().required().email(),
    name: joi_1.default.string().trim().required(),
    surname: joi_1.default.string().trim().required(),
    password: joi_1.default.string().min(8).max(50).required(),
    role: joi_1.default.string().trim().default("user")
});
