"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = void 0;
const ApiError_1 = require("../errors/ApiError");
const http_1 = require("../services/http");
function apiErrorHandler(err, req, res, next) {
    if (err.name === "ValidationError") {
        const response = (0, http_1.buildResponse)({
            success: false,
            message: err.message
        });
        return res.status(400).json(response);
    }
    if (err instanceof ApiError_1.ApiError) {
        const response = (0, http_1.buildResponse)({
            success: false,
            message: err.message,
        });
        return res.status(err.statusCode).json(response);
    }
    const response = (0, http_1.buildResponse)({
        success: false,
        message: "Internal Server Error",
    });
    return res.status(500).json(response);
}
exports.apiErrorHandler = apiErrorHandler;
