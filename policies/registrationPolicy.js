const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const registrationValidation = (data) => Joi.object({
    name: Joi.string().min(6).max(40).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
    isAdmin: Joi.boolean()
}).validate(data);

module.exports.RegistrationPolicy = async (req, res, next) => {
    try {
        // validate the data input
        const {
            error
        } = registrationValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // check if email is existed
        const user = await User.findOne({
            email: req.body.email
        });
        if (user) return res.status(400).send("Email is already existed!");
    } catch (err) {
        next(err);
    }

    // encrypt password by hashing it
    const salt = bcrypt.genSaltSync(8);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    req.body.password = hashPassword;
    next();

}