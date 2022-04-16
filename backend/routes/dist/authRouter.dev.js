"use strict";

var express = require("express");

var router = express.Router();

var controller = require("../controllers/authController");

var _require = require("express-validator"),
    body = _require.body,
    query = _require.query,
    param = _require.param;

var isAuth = require("../MW/auth");

var emailVerify = require("../controllers/authController"); // const {isAuth} = require("../MW/auth")


router.post("/login", [body("email").notEmpty().withMessage("Email is not valid"), body("password").notEmpty().withMessage("password should not be empty")], controller.userLogin);
router.post("/changePass", isAuth, [body("email").isEmail().withMessage("Email is not valid"), body("password").notEmpty().withMessage("Man enter your password"), body("newPassword").notEmpty().withMessage("Man enter a new password"), body("newPasswordConfirm").custom(function (value, _ref) {
  var req = _ref.req;
  return value == req.body.newPassword;
}).withMessage("newPasswordConfirm doesn't match")], controller.changePass);
router.post("/register", [body("name").notEmpty().withMessage("name should not be empty"), body("email").isEmail().withMessage("Email is not valid"), body("password").notEmpty().withMessage("password should not be empty"), body("confirmpassword").custom(function (value, _ref2) {
  var req = _ref2.req;
  return value == req.body.password;
}).withMessage("confirmpassword doesn't match")], controller.register);
router.put("/updateUser", [body("email").isEmail().withMessage("invalid Email.")], isAuth, controller.updateUser); //Email Verify

router.get("/user/verify/:id/:token", [], isAuth, controller.sendVerificationEmail);
router.post("/refresh_token", controller.getAccessToken);
router.post("/forgot", controller.forgotPassword);
router.post("/reset", isAuth, controller.resetPassword);
router.post("/google_login", controller.googleLogin);
router.post("/facebook_login", controller.facebookLogin);
module.exports = router;