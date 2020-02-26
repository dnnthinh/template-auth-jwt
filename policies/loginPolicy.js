const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const loginValidation = (data) => Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
}).validate(data);

module.exports.LoginPolicy = async (req, res, next) => {
    try {
        // validate the data input
        const {
            error
        } = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        // check if email is existed
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) return res.status(400).send("Email is not existed!");

        // check if password is matched
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send("Your password is not correct!");
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}
