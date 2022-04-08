const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
isAuth=require("./../MW/auth");
const controller = require("./../controllers/payController");


router

.post(
    
    [
    ],
    controller.createPay
);


module.exports = router;
