"use strict";

var express = require("express");

var mongoose = require("mongoose");

var router = express.Router();

var _require = require("express-validator"),
    body = _require.body; // const { request } = require("http");
// isAuth = require("./../Middleware/authMW");


var category = require("./../models/category");

var controller = require("./../controllers/categoryController");

router.route("/category").get(controller.show_category).post([body("name").isAlphanumeric().withMessage("invalid Name."), body("description").isString().withMessage("enter valid price"), body("bannerImage").isString().withMessage("enter brand name")], controller.add_category);
router.route("/category/:name").get(function (request, response, next) {
  category.find({
    name: request.params.name
  }).then(function (data) {
    request.body.category_id = data._id;
    response.redirect(307, "/products/");
    console.log(data._id);
  })["catch"](function (error) {
    return next(error);
  }); // console.log(request.params.name);
  // throw new Error("Not Found");
});
module.exports = router;