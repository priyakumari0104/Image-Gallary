const usermodel = require('../models/user.model');

const jwt = require('jsonwebtoken');

async function signup(req, res) {

    const { name, email, password } = req.body;

    // check existing user first
    const existingUser = await usermodel.findOne({ email });

    if (existingUser) {
        return res.status(409).json({
            message: "user already exists"
        });
    }

    // create new user
    const user = await usermodel.create({
        name,
        email,
        password
    });

    // generate token
    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.cookie("token", token);

    res.status(200).json({
        message: "signup successful",
        token,
        user
    });

}

module.exports = { signup };