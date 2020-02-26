const express = require('express');
const {
    verifyToken,
    verifyAdmin
} = require('../policies/verifyRole');
const User = require('../models/user');

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
    try {
        const user = await User.findById({
            _id: req.user._id
        });
        res.send(`send posts to client`);
    } catch (error) {
        res.status(400).send("Not found user!")
    }

});

router.get("/pending", verifyAdmin, (req, res) => {
    try {
        res.send(`post is pending`);
    } catch (error) {
        res.status(400).send("Not found user!")
    }

});

module.exports = router;