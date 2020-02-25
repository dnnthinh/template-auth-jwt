const express = require('express');
require('dotenv').config();

const User = require('../models/user');
const {
    RegistrationPolicy
} = require('../policies/RegistrationPolicy');
const {
    LoginPolicy
} = require('../policies/LoginPolicy');
const {
    RegistrationController
} = require('../controllers/RegistrationController');
const {
    LoginController
} = require('../controllers/LoginController');


const router = express.Router();

router.post('/register', RegistrationPolicy, RegistrationController);

router.post('/login', LoginPolicy, LoginController);

router.post('/logout', (req, res) => {
    // TODO: create blacklistToken with redis ?
})

module.exports = router;