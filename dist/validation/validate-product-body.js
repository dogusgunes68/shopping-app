"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.productValidation = joi_1.default.object({
    name: joi_1.default.string().trim().required(),
    price: joi_1.default.number().min(0).required(),
    description: joi_1.default.string().trim().required()
});
