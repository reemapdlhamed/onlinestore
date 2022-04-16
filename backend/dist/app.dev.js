"use strict";

require("dotenv").config();

var express = require("express");

var app = express();

var bodyParser = require("body-parser");

var mongoose = require("mongoose");

var morgan = require("morgan");

var cors = require("cors"); // const asyncHandler = require("express-async-handler");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan("tiny")); //CORS

app.use(cors());
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  response.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
}); //Connect to DB

mongoose.connect(process.env.DATABASE_URL).then(function () {
  console.log("DB Connected");
})["catch"](function () {
  console.log("DB Error.");
}); //Listen To port

app.listen(process.env.PORT_NUMBER); //Import Routes

var authenticationRouter = require("./routes/authRouter");

var coponRouter = require("./routes/coponRouter");

var productRouter = require("./routes/productRouter");

var categoryRouter = require("./routes/categoryRouter");

var cartRouter = require("./routes/cartRouter"); // const adminRouter = require("./routes/adminRouter");


var orderRouter = require("./routes/orderRouter");

var userRouter = require("./routes/userRouter");

var payRouter = require("./routes/payRouter");

var messageRouter = require("./routes/messageRouter"); // const message = require("./routes/messageRouter");


app.use("/payment", payRouter);
app.use(authenticationRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(coponRouter);
app.use(cartRouter);
app.use(userRouter);
app.use("/orders", orderRouter);
app.use(messageRouter); //Not found MW

app.use(function (request, response) {
  response.status(404).json({
    data: "Not Found"
  });
}); //Error MW

app.use(function (error, request, response, next) {
  //JS  code function.length
  var status = error.status || 500;
  response.status(status).json({
    Error: error + ""
  });
});