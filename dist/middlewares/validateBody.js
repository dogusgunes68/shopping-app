"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
function validateBody(schema) {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body);
        if (error) {
            throw error;
        }
        req.body = value;
        next();
    };
}
exports.validateBody = validateBody;
