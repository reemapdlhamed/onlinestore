const jwt = require("jsonwebtoken");
var ls = require('local-storage');

module.exports = (request, response, next) => {
    let token, decode;
    try {
        // token = localStorage.getItem('token');
        token = ls("token");
        console.log("authMW: Token",token);
        // token = req.headers.token
        //token=request.get("Authorization").split(" ")[1];
        console.log(token)
        decode = jwt.verify(token, process.env.SECRET_KEY)

    } catch (error) {
        error.message = "No Authorized";
        error.status = 403;
        next(error);
    }
    if (decode !== undefined) {
        request.role = decode.role;
        request.email = decode.email;
        next();
    }

}