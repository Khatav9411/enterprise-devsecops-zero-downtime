const Joi = require("joi");

exports.productSchema = Joi.object({

    name: Joi.string()
        .required(),

    description: Joi.string()
        .allow("")
        .required(),

    price: Joi.number()
        .positive()
        .required(),

    stock: Joi.number()
        .integer()
        .min(0)
        .required()

});