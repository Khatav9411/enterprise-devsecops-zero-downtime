const Joi = require("joi");

exports.createUserSchema = Joi.object({

    full_name: Joi.string()
        .min(3)
        .max(100)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    password_hash: Joi.string()
        .min(6)
        .required(),

    role: Joi.string()
        .valid("ADMIN", "DEVOPS", "USER")
        .required()

});

exports.updateUserSchema = Joi.object({

    full_name: Joi.string().min(3),

    email: Joi.string().email(),

    role: Joi.string()
        .valid("ADMIN", "DEVOPS", "USER")

});