const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { request } = require("http");
//isAuth=require("./../Middleware/authMW");
const category = require("./../models/categorySchema");

router
  .route("/category")
  .get(show_category)


  .post(
    [
      body("name").isAlphanumeric().withMessage("invalid Name."),
      body("description").isString().withMessage("enter valid price"),
      body("bannerImage").isString().withMessage("enter brand name"),
    ],
    controller.add_category
  )

router
  .route("/category/:category")
  .get(isAuth, function (request, response, next) {
    category
      .findOne({ name: request.body.name })
      .then((data) => {
        request.category_id = data.category_id;
        response.redirect(307, "products");
      })
      .catch((error) => next(error));

    throw new Error(" Not Authorized");
  });
