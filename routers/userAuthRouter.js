const express = require('express')
const router = express.Router()
const controller = require("./../Controllers/userAuthController");



router.post("/login", (request, response) => {
    response.send("this is login");
})


router.post("/register", controller.register)



module.exports = router