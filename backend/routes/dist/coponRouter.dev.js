"use strict";

var express = require("express");

var mongoose = require("mongoose");

var router = express.Router();

var _require = require("express-validator"),
    body = _require.body; // const { request } = require("http");


isAuth = require("./../MW/auth");

var controller = require("./../controllers/coponController");

router.route("/copon").post(isAuth, [body("value").isNumeric().withMessage("invalid value."), body("code").isString().withMessage("invalid code."), body("custID").isString().withMessage("invalid custID.")], controller.addCopon);
router.route("/validcopon").post(isAuth, [body("value").isNumeric().withMessage("invalid value."), body("code").isString().withMessage("invalid code."), body("custID").isString().withMessage("invalid custID.")], controller.validCopon);
module.exports = router;