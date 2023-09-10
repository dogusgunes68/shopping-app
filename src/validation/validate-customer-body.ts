import joi from "joi";

export const customerValidation = joi.object({
    email: joi.string().required().email(),
    name: joi.string().trim().required(),
    surname: joi.string().trim().required(),
    password: joi.string().min(8).max(50).required(),
    role: joi.string().trim().default("user")
});
