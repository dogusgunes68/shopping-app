import { ResponseModel } from "../models/response";
import { AuthResponse } from "../models/response-auth";
import { isBoolean, isObject, isString } from "../utils/helper"

export function buildResponse(options: any): ResponseModel{

    const response: ResponseModel = {
        success: true,
        message: null,
        data : {}
    }

    if(isObject(options)){
        if(isBoolean(options.success)){
            response.success = options.success;
        }
        if(isString(options.message)){
            response.message = options.message;
        }

        if(isObject(options.data)){
            response.data = options.data;
        }
    }

    return response;
}

export function buildAuthResponse(options: any): AuthResponse{

    const response: AuthResponse = {
        success: true,
        message: null,
        token: null
    }

    if(isObject(options)){
        if(isBoolean(options.success)){
            response.success = options.success;
        }
        if(isString(options.message)){
            response.message = options.message;
        }

        if(isString(options.token)){
            response.token = options.token;
        }
    }

    return response;
}
