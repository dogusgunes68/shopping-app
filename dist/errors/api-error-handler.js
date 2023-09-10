"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = void 0;
const api_error_1 = require("./api-error");
const http_1 = require("../services/http");
function apiErrorHandler(err, req, res, next) {
    if (err instanceof api_error_1.ApiError) {
        const response = (0, http_1.buildResponse)({
            success: false,
            message: err.message,
        });
        return res.status(400).json(response);
    }
    const response = (0, http_1.buildResponse)({
        success: false,
        message: err.message,
    });
    return res.status(500).json(response);
}
exports.apiErrorHandler = apiErrorHandler;
