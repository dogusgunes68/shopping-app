"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.orderValidation = joi_1.default.object({
    count: joi_1.default.number().min(1).max(15).default(1),
    product_id: joi_1.default.number().required(),
});
