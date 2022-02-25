const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
//isAuth=require("./../Middleware/authMW");

router
  .route("/products")
  .get(isAuth, controller.show_speakers)

  .post(
    [
      body("name").isAlphanumeric().withMessage("invalid Name."),
      body("price").isNumeric().withMessage("enter valid price"),
      body("brand").isString().withMessage("enter brand name"),
      body("seller_id").notEmpty().withMessage("Address should be an object"),
      body("quantity").isNumeric().withMessage("enter number"),
      body("category_id").notEmpty().withMessage("enter valid category id"),
      body("discount").isNumeric().withMessage("enter discount if exist"),
      body("description").isString().withMessage("enter descriptiont"),
      body("images").notEmpty().withMessage("you should images for product"),
    ],
    controller.add_product
  )

  .delete(
    isAuth,
    [body("id").notEmpty().withMessage("ID Should be a object_ID")],
    controller.delete_product
  )

  .put(
    isAuth,
    [
      body("name").isAlphanumeric().withMessage("invalid Name."),
      body("price").isString().withMessage("Enter Valid Price."),
      body("brand").isEmail().withMessage("enter brand name"),
      body("seller_id").notEmpty().withMessage("enter number"),
      body("quantity")
        .isNumeric()
        .withMessage("enter the quantity of the product"),
      body("category_id").notEmpty().withMessage("enter number"),
      body("discount").isNumeric().withMessage("enter discount"),
      body("discription").isString().withMessage("enter product description"),
      body("images").notEmpty().withMessage("Image should be a string"),
      body("seller").notEmpty().withMessage("Invalid Seller Name"),
      body("quantity")
        .isNumeric()
        .withMessage("you have to enter the quantity"),
      body("properities").notEmpty().withMessage("properties is not valid"),
    ],
    controller.update_product
  );

router
  .route("/products/add_reviews")
  .put(
    isAuth,
    [
      body("title").isString().withMessage("enter valid review title"),
      body("content").isString().withMessage("enter valid review content"),
      body("username").isString().withMessage("enter valid username"),
    ].controller.add_review
  );

router
  .route("/products/:id")
  .get(
    isAuth,
    [body("id").notEmpty().withMessage("ID shouldn't be Empty.")],
    controller.show_product
  );
