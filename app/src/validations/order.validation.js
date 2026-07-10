const Joi = require("joi");

exports.orderSchema = Joi.object({

    user_id: Joi.number()
        .integer()
        .required(),

    product_id: Joi.number()
        .integer()
        .required(),

    quantity: Joi.number()
        .integer()
        .min(1)
        .required(),

    total_price: Joi.number()
        .positive()
        .required(),

    status: Joi.string()
        .valid(
            "PENDING",
            "PROCESSING",
            "COMPLETED",
            "CANCELLED"
        )
        .required()

});