const User = require('../models/user');

module.exports.RegistrationController = async (req, res, next) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        if (req.body.isAdmin) user.isAdmin = req.body.isAdmin;
        const savedUser = await user.save();
        res.send({
            "msg": "Registered successfully!",
            user: {
                "_id": savedUser._id,
                "email": savedUser.email,
                "firstName": savedUser.firstName,
                "lastName": savedUser.lastName,
            }
        });
    } catch (error) {
        res.status(400).send(error);
    }
}