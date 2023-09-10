"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const http_1 = require("../services/http");
function validateBody(schema) {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        if (error) {
            const response = (0, http_1.buildResponse)({
                success: false,
                message: error.message,
            });
            return res.status(400).json(response);
        }
        req.body = value;
        next();
    };
}
exports.validateBody = validateBody;
