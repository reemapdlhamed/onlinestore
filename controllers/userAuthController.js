const User = require("../models/user")
const bcrypt = require("bcrypt");


exports.register = async (request, response) => {

    let hashed = bcrypt.hashSync(request.body.password, 10);
    const user = new User({
        name: request.body.name,
        email: request.body.email,
        password: hashed
    }
    );

    try {
        const newUser = await user.save();
        response.status(201).json(newUser);
    }
    catch (err) {
        response.status(400).json({ message: err.message });
    }
}