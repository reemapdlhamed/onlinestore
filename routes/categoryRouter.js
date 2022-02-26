const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { body } = require("express-validator");
// const { request } = require("http");
// isAuth = require("./../Middleware/authMW");
const category = require("./../models/category");
const controller = require("./../controllers/categoryController");

router
  .route("/category")
  .get(controller.show_category)

  .post(
    [
      body("name").isAlphanumeric().withMessage("invalid Name."),
      body("description").isString().withMessage("enter valid price"),
      body("bannerImage").isString().withMessage("enter brand name"),
    ],

    controller.add_category
  );

router.route("/category/products").get(function (request, response, next) {
  // category;
  // .find({ name: request.params.name })
  // .then((data) => {
  //   request.body.category_id = data[0]._id;
  //   response.redirect(307, "/products/");
  //   console.log(data[0]._id.objectId());
  // })
  response.redirect(307, "/products");
  console.log(data[0]._id.objectId());

  // .catch((error) => next(error));
  // console.log(request.params.name);
  // throw new Error("Not Found");
});

module.exports = router;
