const express = require('express')
const router = express.Router()
const controller = require("../controllers/cartController");
const { body, query, param } = require("express-validator")
const isAuth = require("../MW/auth");



 
router.put("/addToCart",[

body("cart.product_id").isString().withMessage("invalid product id."),
body("cart.quantity").isNumeric().withMessage("invalid product quantity."),

],isAuth,controller.addToCart)


router.put("/updateQuantityCart",[

    body("cart.product_id").isString().withMessage("invalid product id."),
    body("cart.quantity").isNumeric().withMessage("invalid product quantity."),
    
    ],isAuth,controller.updateQuantityCart)


    router.delete("/removeFromCart",[

        body("cart.product_id").isString().withMessage("invalid product id.")        
        ],isAuth,controller.removeFromCart)
module.exports = router



router.post("/confirmCart",[

    body("email").isString().withMessage("invalid product id."),
    //body("cart.quantity").isNumeric().withMessage("invalid product quantity."),
    
    ],isAuth,controller.confirmCart)
