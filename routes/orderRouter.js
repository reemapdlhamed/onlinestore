const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
isAuth=require("./../MW/auth");
const controller = require("./../controllers/orderController");


router
// GET> /orders > FOR ADMIN
.route("/")
.get(isAuth, controller.getOrders)
// POST> /orders > ADD a new order
.post(
    isAuth,
    [
    // body("phoneNumber").isNumeric().withMessage("invalid PhoneNumber."),
    // body("shippingAddress").isObject().withMessage("Address should be an object"),
    // // body("country").isString().withMessage("enter correct country"),
    // // body("city").isString().withMessage("enter correct city"),
    // // body("street").isString().withMessage("enter correct street"),
    // // body("building").isString().withMessage("enter correct building"),
    // // body("postalCode").isAlphanumeric().withMessage("enter postalCode"),
    // body("paymentType").isString().withMessage("enter paymentType"),
    ],
    controller.createOrders
);

// router.route("/my-order").get(isAuth, controller.getMyOrders);

// GET> /orders/:id > Get Some Order for customer
router.route("/:customerId").get(isAuth, controller.getMyOrdersByID);

//TODO Later
// router.route("/:id/pay").put(isAuth, controller.updateOrderToPaid);

// PUT> /orders/:id  >FOR ADMIN >>update Status 
router.route("/:id/order-status")
        .put(isAuth,[
            body("orderStatus").isString().withMessage("enter orderStatus"),
        ], controller.updateOrderStatus);

module.exports = router;
