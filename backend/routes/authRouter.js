const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");
const { body, query, param } = require("express-validator");
const isAuth = require("../MW/auth");

// const {isAuth} = require("../MW/auth")

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").notEmpty().withMessage("password should not be empty"),
  ],
  controller.userLogin
);

router.post(
  "/changePass",
  isAuth,
  [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").notEmpty().withMessage("Man enter your password"),
    body("newPassword").notEmpty().withMessage("Man enter a new password"),
    body("newPasswordConfirm")
      .custom((value, { req }) => {
        return value == req.body.newPassword;
      })
      .withMessage("newPasswordConfirm doesn't match"),
  ],
  controller.changePass
);

router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("name should not be empty"),
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").notEmpty().withMessage("password should not be empty"),
    body("confirmpassword")
      .custom((value, { req }) => {
        return value == req.body.password;
      })
      .withMessage("confirmpassword doesn't match"),
  ],
  controller.register
);

router.put(
  "/updateUser",
  [body("email").isEmail().withMessage("invalid Email.")],
  isAuth,
  controller.updateUser
);

module.exports = router;
