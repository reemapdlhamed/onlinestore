const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Seller = require("../models/seller");
const bcrypt = require("bcrypt");
const { redirect } = require("express/lib/response");
var ls = require('local-storage');
const res = require("express/lib/response");
require("dotenv").config();


exports.userLogin = (request, response, next) => {

    //TODO: Get User Role from Database and assign it to Role
    let token = jwt.sign(
        {
            role: "user",
            email: request.body.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
    );

    ls('token', token);

    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors
            .array()
            .reduce((current, object) => current + object.msg + " ", "");
        throw error;
    }

    User.findOne({ email: request.body.email })
        .then((data) => {
            encrypted = data.password;

            bcrypt
                .compare(request.body.password, encrypted)
                .then(function (result) {
                    if (result) {
                        response.json({ data, token })
                        // response.redirect("http://127.0.0.1:5500/index.html")
                    } else {
                        next(new Error("wrong pass"))
                    }
                });
        })
        .catch((error) => {
            error.message = "error happened while login1";
            next(error);
        });

};



exports.changePass = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors
            .array()
            .reduce((current, object) => current + object.msg + " ", "");
        throw error;
    }
    console.log("tokennnnnnnnnnnnnnnnnnnnnnnnnnnnn")
    console.log(ls("token"))
    console.log("Req.role: ", request.role);
    if (1) {
        User.findOne({ email: request.body.email })
            .then((data) => {
                encryptedOld = data.password;

                bcrypt
                    .compare(request.body.oldPassword, encryptedOld)
                    .then(function (result) {
                        if (
                            result &&
                            request.body.newPassword == request.body.newPasswordConfirm &&
                            request.body.oldPassword != request.body.newPassword
                        ) {
                            User.findByIdAndUpdate(data._id, {
                                $set: {
                                    password: bcrypt.hashSync(request.body.newPassword, 10),
                                },
                            }).then((data) => {
                                if (data == null) next(new Error("User not fount"))
                                response.send("password changed")
                                // else response.redirect("http://127.0.0.1:5500/index.html")
                            });
                        } else {

                            next(new Error("error happened while login9"))
                        }
                    });
            })
            .catch((error) => {
                error.message = "error happened while login3";
                next(error);
            });
    } else {
        next(new Error("plz login first"))
    }
};


exports.register = async (request, response, next) => {

    //Validation
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors.array().reduce((current, object) => current + object.msg + " ", "")
        throw error;
        //FIXME: Error middleware doesn't handle async functions.
        
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