import { isBoolean, isObject, isString } from "../utils/helper"

export function buildResponse(options: any){

    const response = {
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

export function buildAuthResponse(options: any){

    const response = {
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

        if(isString(options.data)){
            response.token = options.token;
        }
    }

    return response;
}
