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

    // validate the data input
    const {
        error
    } = registrationValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = null;
    try {
        // check if email is existed
        user = await User.findOne({
            email: req.body.email
        });
    } catch (err) {
        next(err);
    }
    if (user) return res.status(400).send("Email is already existed!");

    // encrypt password by hashing it
    const salt = bcrypt.genSaltSync(8);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    req.body.password = hashPassword;
    next();

}