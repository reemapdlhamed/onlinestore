const express = require('express')
const router = express.Router()
const controller = require("./../Controllers/userAuthController");
const { body, query, param } = require("express-validator")



router.post("/login", controller.userLogin)
router.post("/changePass", controller.changePass)


router.post("/register", [

    body("name").notEmpty().withMessage("name should not be empty"),
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").notEmpty().withMessage("password should not be empty"),
    body("confirmpassword").custom((value, { req }) => {
        return value == req.body.password;
    }).withMessage("confirmpassword doesn't match")

], controller.register)



module.exports = router