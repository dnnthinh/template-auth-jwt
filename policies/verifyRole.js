const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers['auth-token'];
    if (!token) return res.status(401).send("Access denied!");
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send("Invalid token!");
    }
};

module.exports.verifyAdmin = (req, res, next) => {
    const token = req.headers['auth-token'];
    if (!token) return res.status(401).send("Access denied!");
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        User.findById({
            _id: decoded._id
        }, (err, user) => {
            if (err || !user) {
                return res.status(401).send("Error when verifying your role!");
            }
            if (user.isAdmin) {
                req.user = user;
                next();
            } else res.status(403).send("You cannot perform this operation!");
        });
    } catch (error) {
        res.status(401).send("Invalid token!");
    }
};