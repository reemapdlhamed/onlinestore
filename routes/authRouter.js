const express=require("express");
//const authController=require("./../controllers/authenticationController")
isAuth=require("./../MW/auth");
const {body,query,param}=require("express-validator")

const router=express.Router();

router.post("/login",authController.customerLogin)
router.post("/seller/login",authController.sellerLogin)

router.post("/register",authController.register)


router.route("/changePass").post([
    
    body("email").notEmpty().isEmail().withMessage("invalid Email."),
    body("oldPassword").notEmpty().withMessage("old Password shouldn't be Empty."),
    body("newPassword").notEmpty().withMessage("new Password shouldn't be Empty."),
    body("newPasswordConfirm").notEmpty().withMessage("confirm Password shouldn't be Empty."),

],isAuth,authController.changePass)


router.route("/login").post([
    
    body("email").notEmpty().isEmail().withMessage("invalid Email."),
    body("password").notEmpty().withMessage("new Password shouldn't be Empty."),

],isAuth,authController.login)


router.route("/register").post([
    
    body("email").notEmpty().isEmail().withMessage("invalid Email."),
    body("password").notEmpty().withMessage("new Password shouldn't be Empty."),
    body("confirmPassword").notEmpty().withMessage("confirm Password shouldn't be Empty."),
    body("fullName").notEmpty().withMessage("confirm Password shouldn't be Empty."),

],isAuth,authController.changePass)

 module.exports=router;