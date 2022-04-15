"use strict";

var express = require("express");

var wishListRouter = express.Router(); //controller

var controller = require("./../controllers/wishListController"); //auth MW


var isAuth = require("./../MW/auth");

wishListRouter.route("/wishlist").get(isAuth, controller.getWishlist).put(isAuth, controller.updateWishlist)["delete"](isAuth, controller.deleteFromWishlist);
module.exports = wishListRouter;