const express = require('express');
require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = require('../config/db-pg')
const {
    Company,
    User,
    WorkingDay,
    UsersWorkingDay
} = require('../models/sequelize/index');

const {
    RegistrationPolicy
} = require('../policies/registrationPolicy');
const {
    LoginPolicy
} = require('../policies/loginPolicy');
const {
    RegistrationController
} = require('../controllers/registrationController');
const {
    LoginController
} = require('../controllers/loginController');


const router = express.Router();

router.post('/register', RegistrationPolicy, RegistrationController);

router.post('/login', LoginPolicy, LoginController);

router.post('/test', (req, res) => {
    sequelize
        .sync({
            force: true
        }) // create the database table for our model(s)
        .then(function () {
            console.log("created all tables")
            Company.create({
                id: '1',
                name: "Comp"
            });

            User.create({
                id: 10,
                companyId: 1
            });
        });




    res.send("ok");
});

router.post('/logout', (req, res) => {
    // TODO: create blacklistToken with redis ?
})

module.exports = router;