import joi from "joi";

export const adminLoginValidation = joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(8).max(50).required(),
});