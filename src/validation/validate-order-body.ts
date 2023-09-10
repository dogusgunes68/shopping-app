import joi from "joi";

export const orderValidation = joi.object({
    count: joi.number().min(1).max(15).default(1),
    product_id: joi.number().required(),
});