const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const Seller = require("../models/seller");
const bcrypt = require("bcrypt");
const { redirect } = require("express/lib/response");
var ls = require("local-storage");
const res = require("express/lib/response");
require("dotenv").config();
const asyncHandler = require("express-async-handler");

exports.userLogin = (request, response, next) => {
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
      if (data == null) {
        throw new Error("email not found1");
      }
      encrypted = data.password;

      bcrypt.compare(request.body.password, encrypted).then(function (result) {
        if (result) {
          let token = jwt.sign(
            {
              role: data.role,
              id: data._id,
              email: data.email,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
          );
          response.json({ data, token });
          // response.redirect("http://127.0.0.1:5500/index.html")
        } else {
          next(new Error("wrong pass"));
        }
      });
    })
    .catch((error) => {
      next(error.message);
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
  // console.log("tokennnnnnnnnnnnnnnnnnnnnnnnnnnnn")
  // console.log(ls("token"))

  // console.log("TOKEN TESTS");
  // console.log("Req.role: ", request.role);
  // console.log("Req.id: ", request.id); //working
  User.findOne({ email: request.body.email })

    .then((data) => {
      if (data.role != request.role || data.email != request.email)
        next(Error("login first plz"));
      if (data == null) {
        throw new Error("email not found");
      }

      let matched = bcrypt.compareSync(request.body.password, data.password);
      if (
        matched &&
        request.body.newPassword == request.body.newPasswordConfirm
      ) {
        User.findByIdAndUpdate(data._id, {
          $set: {
            password: bcrypt.hashSync(request.body.newPassword, 10),
          },
        }).then((data) => {
          if (data == null) next(new Error("User not fount"));
          response.json({ message: "password changed" });
          // else response.redirect("http://127.0.0.1:5500/index.html")
        });
      } else {
        throw new Error("password in incorrect or not matched");
      }
    })
    .catch((error) => {
      // error.message = "error happened while login3";
      next(error.message);
    });
};

exports.register = asyncHandler(async (request, response, next) => {
  //Validation
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors
      .array()
      .reduce((current, object) => current + object.msg + " ", "");
    throw error;
  }

  let hashed = bcrypt.hashSync(request.body.password, 10);
  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: hashed,
  });

  try {
    const newUser = await user.save();
    response.status(201).json(newUser);
  } catch (err) {
    err.status = 400 ;
    next(err);
  }
});

exports.updateUser = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors
      .array()
      .reduce((current, object) => current + object.msg + " ", "");
    throw error;
  }
  // console.log("tokennnnnnnnnnnnnnnnnnnnnnnnnnnnn")
  // console.log(ls("token"))

  // console.log("TOKEN TESTS");
  // console.log("Req.role: ", request.role);
  // console.log("Req.id: ", request.id); //working
  User.findOne({ email: request.body.email })

    .then((data) => {
      if (data.role != request.role || data.email != request.email)
        next(Error("login first plz"));
      if (data == null) {
        throw new Error("email not found");
      }

      User.findByIdAndUpdate(data._id, {
        $set: {
          address: request.body.address,
          phone: request.body.phone,
          name: request.body.name,
        },
      }).then((data) => {
        if (data == null) next(new Error("User not fount"));
        response.json({ message: "data updated" });
        // else response.redirect("http://127.0.0.1:5500/index.html")
      });
    })
    .catch((error) => {
      // error.message = "error happened while login3";
      next(error.message);
    });
};
