"use strict";

var express = require("express");

var router = express.Router();

var controller = require("../controllers/wishListController");

var _require = require("express-validator"),
    body = _require.body,
    query = _require.query,
    param = _require.param;

var isAuth = require("../MW/auth"); //TODO: Change Route names. Make it RESTFUL API.


router.route("/wishlist").post(isAuth, [body("product_id").isString().withMessage("invalid product id.")], controller.addToWishList)["delete"](isAuth, [body("product_id").isString().withMessage("invalid product id.")], controller.removeFromWishList).get(isAuth, controller.getWishList);
module.exports = router;