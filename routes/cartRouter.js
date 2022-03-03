const express = require("express");
const router = express.Router();
const controller = require("../controllers/cartController");
const { body, query, param } = require("express-validator");
const isAuth = require("../MW/auth");

//TODO: Change Route names. Make it RESTFUL API.
router.put(
  "/addToCart",
  [
    body("product_id").isString().withMessage("invalid product id."),
    body("quantity").isNumeric().withMessage("invalid product quantity."),
  ],
  isAuth,
  controller.addToCart
);

router.put(
  "/updateQuantityCart",
  [
    body("product_id").isString().withMessage("invalid product id."),
    body("quantity").isNumeric().withMessage("invalid product quantity."),
  ],
  isAuth,
  controller.updateQuantityCart
);

router.delete(
  "/removeFromCart",
  [body("product_id").isString().withMessage("invalid product id.")],
  isAuth,
  controller.removeFromCart
);
module.exports = router;

router.post(
  "/cart/buy",
  [
    // body("email").isString().withMessage("invalid product email."),
    //body("cart.quantity").isNumeric().withMessage("invalid product quantity."),
  ],
  isAuth,
  controller.confirmCart
);
