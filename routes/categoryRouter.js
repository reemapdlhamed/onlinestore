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

router.route("/category/:id").get(function (request, response, next) {
  let category_id = request.params.id;
  response.redirect(307,"/products/"+category_id);
});

module.exports = router;
