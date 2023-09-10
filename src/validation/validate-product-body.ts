import joi from "joi";
export const productValidation = joi.object({
    name: joi.string().trim().required(),
    price: joi.number().min(0).required(),
    description: joi.string().trim().required()
});