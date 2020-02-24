const joi = require('@hapi/joi');

const registrationValidation = (data) => joi.object({
    name: joi.string().min(6).max(40).required(),
    email: joi.string().required().email(),
    password: joi.string().min(6).required(),
    isAdmin: joi.boolean()
}).validate(data);

const loginValidation = (data) => joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(6).required()
}).validate(data);

module.exports = {
    registrationValidation,
    loginValidation
}