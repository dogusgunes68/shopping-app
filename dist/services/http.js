"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAuthResponse = exports.buildResponse = void 0;
const helper_1 = require("../utils/helper");
function buildResponse(options) {
    const response = {
        success: true,
        message: null,
        data: {}
    };
    if ((0, helper_1.isObject)(options)) {
        if ((0, helper_1.isBoolean)(options.success)) {
            response.success = options.success;
        }
        if ((0, helper_1.isString)(options.message)) {
            response.message = options.message;
        }
        if ((0, helper_1.isObject)(options.data)) {
            response.data = options.data;
        }
    }
    return response;
}
exports.buildResponse = buildResponse;
function buildAuthResponse(options) {
    const response = {
        success: true,
        message: null,
        token: null
    };
    if ((0, helper_1.isObject)(options)) {
        if ((0, helper_1.isBoolean)(options.success)) {
            response.success = options.success;
        }
        if ((0, helper_1.isString)(options.message)) {
            response.message = options.message;
        }
        if ((0, helper_1.isString)(options.data)) {
            response.token = options.token;
        }
    }
    return response;
}
exports.buildAuthResponse = buildAuthResponse;
