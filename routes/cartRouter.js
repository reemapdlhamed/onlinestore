const express = require("express");
const router = express.Router();
const controller = require("../controllers/cartController");
const { body, query, param } = require("express-validator");
const isAuth = require("../MW/auth");

//TODO: Change Route names. Make it RESTFUL API.
<<<<<<< HEAD

router.route("/cart")
.post(
  isAuth,
=======
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
>>>>>>> origin/dev
  [
    body("product_id").isString().withMessage("invalid product id."),
    body("quantity").isNumeric().withMessage("invalid product quantity."),
  ],
<<<<<<< HEAD
  controller.addToCart
)
.put(
  isAuth,
  [
    body("product_id").isString().withMessage("invalid product id."),
    body("quantity").isNumeric().withMessage("invalid product quantity."),
  ],
  controller.updateQuantityCart
)
.delete(
  isAuth,
  [body("product_id").isString().withMessage("invalid product id.")],
  controller.removeFromCart
)
router.route("/cart/buy")
.post(
  isAuth,
  controller.confirmCart
);
module.exports = router;
=======
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
>>>>>>> origin/dev
