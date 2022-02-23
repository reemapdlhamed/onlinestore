const express=require("express");
const authController=require("./../controllers/authenticationController")
isAuth=require("./../MW/auth");
const {body,query,param}=require("express-validator")

const router=express.Router();


router.post("/login",authController.userLogin)
router.post("/changePass",authController.changePass)

 module.exports=router;

 