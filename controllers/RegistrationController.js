module.exports.RegistrationController = async (req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        if (req.body.isAdmin) user.isAdmin = req.body.isAdmin;
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
}