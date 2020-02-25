const express = require('express');
require('dotenv').config();

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

router.post('/logout', (req, res) => {
    // TODO: create blacklistToken with redis ?
})

module.exports = router;