const jwt = require('jsonwebtoken');

module.exports.LoginController = (req, res) => {
    // generate token
    try {
        const token = jwt.sign({
            _id: req.user._id
        }, process.env.TOKEN_SECRET);
        res.header("auth-token", token).send({
            msg: "Logged in successfully!",
            token: token
        });
    } catch (error) {
        res.status(400).send(error);
    }
}
