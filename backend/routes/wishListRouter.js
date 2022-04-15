const express = require("express");
const wishListRouter = express.Router();
//controller
const controller = require("./../controllers/wishListController");
//auth MW
const isAuth = require("./../MW/auth");

wishListRouter
  .route("/wishlist")
  .get(isAuth, controller.getWishlist)
  .put(isAuth, controller.updateWishlist)
  .delete(isAuth, controller.deleteFromWishlist);

module.exports = wishListRouter;
