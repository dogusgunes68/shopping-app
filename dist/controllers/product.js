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
exports.updateProductController = exports.createProductController = void 0;
const product_1 = require("../services/product");
const http_1 = require("../services/http");
function createProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = yield (0, product_1.createProduct)(req.body);
            const response = (0, http_1.buildResponse)({
                message: "New Product created successfully",
                data: {
                    productId: id,
                }
            });
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
exports.createProductController = createProductController;
function updateProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const count = yield (0, product_1.updateProduct)(req.body.id, req.body.changes);
            const response = (0, http_1.buildResponse)({
                message: `${count} row updated successfully`,
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
exports.updateProductController = updateProductController;
