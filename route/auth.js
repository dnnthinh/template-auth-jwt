const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const {
    registrationValidation,
    loginValidation
} = require('../helper/validation');

const User = require('../model/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    // validate the data input
    const {
        error
    } = registrationValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if email is existed
    const existedEmail = await User.findOne({
        email: req.body.email
    });
    if (existedEmail) return res.status(400).send("Email is already existed!");

    // encrypt password by hashing it
    const salt = await bcrypt.genSalt(8);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });

    try {
        if (req.body.isAdmin) user.isAdmin = req.body.isAdmin;
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/login', async (req, res) => {
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

    // generate token
    try {
        const token = jwt.sign({
            _id: user._id
        }, process.env.TOKEN_SECRET);
        res.header("auth-token", token).send({
            msg: "Logged in successfully!",
            token: token
        });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/logout', (req, res) => {
    // TODO: create blacklistToken with redis ?
})

module.exports = router;