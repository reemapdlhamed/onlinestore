const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
//isAuth=require("./../Middleware/authMW");


router.route("/order")
.get(isAuth, controller.getAllOrders)
.post(isAuth,controller.createOrders)
// .get(isAuth,controller.getMyOrders)



router.route("/my-order")
.get(isAuth,controller.getMyOrders)

router.route("/:id")
.get(isAuth,controller.getMyOrdersByID)

router.route("/:id/pay").
put(isAuth, controller.updateOrderToPaid);

router.route("/:id/order-status").
put(isAuth, controller.updateOrderStatus);


module.exports=router;

