const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { request } = require("http");
//isAuth=require("./../Middleware/authMW");
const category = require("./../models/categorySchema");
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
