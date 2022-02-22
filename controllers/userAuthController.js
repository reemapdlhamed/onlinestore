const User = require("../models/user")
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");


exports.register = async (request, response, next) => {

    //Validation
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
        // next(error);
        // not working properly 
    }



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
        next(error);
    }

}