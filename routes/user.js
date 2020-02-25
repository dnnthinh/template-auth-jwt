const express = require('express');

const User = require('../models/user');
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

const {
    verifyAdmin
} = require('../policies/verifyRole');

const router = express.Router();

router.get('/', verifyAdmin, (req, res) => {
    User.find((err, docs) => {
        if (err) next(err);
        res.send(docs);
    })

})

router.post('/register', RegistrationPolicy, RegistrationController);

router.post('/login', LoginPolicy, LoginController);

router.post('/logout', (req, res) => {
    // TODO: create blacklistToken with redis ?
})

module.exports = router;