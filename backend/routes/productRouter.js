const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const controller = require("./../controllers/productController");
isAuth=require("./../MW/auth");



router.route("/products/:category_id").get(controller.show_products_category)

router
  .route("/products")
  .get(controller.show_products)

  .post(isAuth,
    [
      body("name").notEmpty().withMessage("invalid Name."),
      body("price").isNumeric().withMessage("enter valid price"),
      body("brand").isString().withMessage("enter brand name"),
      body("seller").notEmpty().withMessage("add seller info"),
      body("quantity").isNumeric().withMessage("enter number"),
      body("category_id").notEmpty().withMessage("enter valid category id"),
      body("discount").isNumeric().withMessage("enter discount if exist"),
      body("description").isString().withMessage("enter descriptiont"),
      body("images").notEmpty().withMessage("you should images for product"),
      body("properties").notEmpty().withMessage("enter product properties"),
      body("quantity").isNumeric().withMessage("enter product quantity"),
    ],
    controller.add_product
  )

  .delete(isAuth,
    [body("id").notEmpty().withMessage("ID Should be a object_ID")],
    controller.delete_product
  )

  .put(isAuth,
    controller.update_product
  );
router
    .route("/edit_reviews")
    .put(controller.edit_review)

router
  .route("/review")
  .get(controller.show_reviews)
  .delete(isAuth,controller.delete_review)
  .put(isAuth,
    [
      body("new_review.title").notEmpty().withMessage("enter valid review title"),
      body("new_review.description").notEmpty().withMessage("enter valid review content"),
      body("new_review.user").isString().withMessage("enter valid username"),
      body("new_review.userID").notEmpty().withMessage("enter valid id"),
      body("new_review.rating").isNumeric().withMessage("enter your rating as number"),
    ],
    controller.add_review
  );

router
  .route("/product/:id")
  .get(
    controller.show_product
  );

router
  .route("/products/stock")
  .put(
    [
      body("id").notEmpty().withMessage("ID shouldn't be Empty."),
      body("amount").isNumeric().withMessage("amount shouldn't be Empty.")
  
  ],
    controller.update_stock
  );

module.exports = router;
