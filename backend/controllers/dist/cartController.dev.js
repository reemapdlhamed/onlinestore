"use strict";

var axios = require("axios"); // manages http requests


var _require = require("express-validator"),
    validationResult = _require.validationResult;

var User = require("../models/user");

var Product = require("../models/product");

require("dotenv").config();

var ObjectId = require("mongoose").Types.ObjectId; // this function is when the customer adds a product to his shipping cart , the poduct is appendded into an array called cart


exports.addToCart = function _callee(request, response, next) {
  var user, x;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: request.email
          }));

        case 3:
          user = _context.sent;

          if (!user) {
            next();
          }

          if (!(user == null)) {
            _context.next = 7;
            break;
          }

          throw new Error("email not found");

        case 7:
          // because we still use postman , we enter the product id as a number in the body
          //when user inputs the product id , we put it in variable called product_id_var , this checks wethere the product_id is real or doesnt exist
          // we convert the number entered in the postman to objectid data type
          // all info about product that we gonna buy like price and quantity we want
          // before we add a product into user's cart , we need to check that he doesnt already have this product in his cart
          // let doesProductInCartExist = await cart.find(
          // (item) => item._id.toString() === request.body.product_id
          //);
          // if the product id exists in the product collection , then let's go on
          //we know the product_id , let's find out some info about the product
          //  const product_obj = await Product.findOne({ _id: product_id_var })
          //   .populate("price")
          //  .populate("quantity")
          //  .populate("discount");
          //doc.quantity represents the stock
          // we have to make sure that user doesnt buy quantyity more than the stock itself
          // product_obj.quantity = Math.min(
          //  request.body.quantity,
          // product_obj.quantity
          //);
          //user then pushes his product into his cart
          console.log("REQ");

          if (!(request.body.length === 0)) {
            _context.next = 11;
            break;
          }

          response.status(400).json({
            message: "error internet connection"
          });
          return _context.abrupt("return");

        case 11:
          x = request.body;
          x.qty = 1;
          user.cart.push(x);
          _context.next = 16;
          return regeneratorRuntime.awrap(user.save());

        case 16:
          response.status(200).json({
            message: "done"
          }); // console.log(product_obj);

          _context.next = 21;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
};

exports.getCart = function _callee2(request, response, next) {
  var user, product_id_var, cart;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: request.email
          }));

        case 3:
          user = _context2.sent;

          if (!user) {
            next();
          }

          if (!(user == null)) {
            _context2.next = 7;
            break;
          }

          throw new Error("email not found");

        case 7:
          // because we still use postman , we enter the product id as a number in the body
          //when user inputs the product id , we put it in variable called product_id_var , this checks wethere the product_id is real or doesnt exist
          // we convert the number entered in the postman to objectid data type
          product_id_var = new ObjectId(request.body.product_id); // all info about product that we gonna buy like price and quantity we want
          // before we add a product into user's cart , we need to check that he doesnt already have this product in his cart

          cart = user.cart; // let doesProductInCartExist = await cart.find(
          // (item) => item._id.toString() === request.body.product_id
          //);
          // if the product id exists in the product collection , then let's go on
          //if product doesnt exist in the product collection or product already in user's cart , then throw an error
          // if ( doesProductInCartExist) {
          //    next();
          // }
          //we know the product_id , let's find out some info about the product
          //  const product_obj = await Product.findOne({ _id: product_id_var })
          //   .populate("price")
          //  .populate("quantity")
          //  .populate("discount");
          //doc.quantity represents the stock
          // we have to make sure that user doesnt buy quantyity more than the stock itself
          // product_obj.quantity = Math.min(
          //  request.body.quantity,
          // product_obj.quantity
          //);

          response.status(200).json(user.cart); // console.log(product_obj);

          _context2.next = 14;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
}; //here we want to remove a product from user's cart


exports.removeFromCart = function _callee3(request, response, next) {
  var user, product_id_var, cart, product_obj;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: request.email
          }));

        case 3:
          user = _context3.sent;

          if (!user) {
            next();
          }

          if (!(user == null)) {
            _context3.next = 7;
            break;
          }

          throw new Error("email not found");

        case 7:
          product_id_var = new ObjectId(request.body._id); // all info about product that we gonna buy like price and quantity we want
          // before we add a product into user's cart , we need to check that he doesnt already have this product in his cart

          cart = user.cart; //we know the product_id , let's find out some info about the product

          _context3.next = 11;
          return regeneratorRuntime.awrap(Product.findOne({
            _id: product_id_var
          }));

        case 11:
          product_obj = _context3.sent;
          //doc.quantity represents the stock
          // we have to make sure that user doesnt buy quantyity more than the stock itself
          //user then pushes his product into his cart
          user.cart.pull(product_obj._id);
          _context3.next = 15;
          return regeneratorRuntime.awrap(user.save());

        case 15:
          response.status(200).json({
            message: "done"
          }); // console.log(product_obj);

          _context3.next = 21;
          break;

        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 18]]);
}; //update quantity of product in the cart of user


exports.updateQuantityCart = function _callee4(request, response, next) {
  var user, product_id_var, cart;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("UPD");
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: request.email
          }));

        case 4:
          user = _context4.sent;

          if (!user) {
            next();
          }

          if (!(user == null)) {
            _context4.next = 8;
            break;
          }

          throw new Error("email not found");

        case 8:
          // because we still use postman , we enter the product id as a number in the body
          //when user inputs the product id , we put it in variable called product_id_var , this checks wethere the product_id is real or doesnt exist
          // we convert the number entered in the postman to objectid data type
          product_id_var = new ObjectId(request.body._id); // all info about product that we gonna buy like price and quantity we want
          // before we add a product into user's cart , we need to check that he doesnt already have this product in his cart

          cart = user.cart; // if the product id exists in the product collection , then let's go on
          //doc.quantity represents the stock
          // we have to make sure that user doesnt buy quantyity more than the stock itself
          //now we look for the product that the user want to update quantity , and edit it
          //doc.quantity represents the stock
          // we have to make sure that user doesnt buy quantyity more than the stock itself
          //user.cart.qty=request.body.qty

          i = 0;

        case 11:
          if (!(i < user.cart.length)) {
            _context4.next = 21;
            break;
          }

          if (!(request.body._id == user.cart[i]._id && request.body.qty)) {
            _context4.next = 18;
            break;
          }

          user.cart[i].qty = request.body.qty;
          _context4.next = 16;
          return regeneratorRuntime.awrap(user.save());

        case 16:
          response.status(200).json({
            message: "done updating quantity"
          }); //user then pushes his product into his cart

          return _context4.abrupt("break", 21);

        case 18:
          i++;
          _context4.next = 11;
          break;

        case 21:
          _context4.next = 25;
          break;

        case 23:
          _context4.prev = 23;
          _context4.t0 = _context4["catch"](1);

        case 25:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 23]]);
}; //this function here , we confirm the cart , so it will become an existing order
// we POST to the order router using axios library


exports.confirmCart = function _callee5(request, response, next) {
  var user, totalPric;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("RR", request.body);
          _context5.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: request.email
          }));

        case 3:
          user = _context5.sent;
          totalPric = 0;

          for (i = 0; i < user.cart.length; i++) {
            totalPric += user.cart[i].price;
          }

          _context5.prev = 6;
          console.log(request.body);
          axios.post("http://127.0.0.1:8080/orders", {
            customerID: user._id,
            customerName: user.name,
            phoneNumber: request.body.phone,
            paymentType: "cod",
            totalPrice: totalPric - request.body.discount,
            discount: request.body.discount,
            //here we put the user's cart into the order collection
            orderItems: user.cart,
            shippingAddress: {
              country: "egypt",
              city: request.body.city,
              street: request.body.street,
              postalCode: "12345",
              building: request.body.appartment
            },
            shippingPrice: 30,
            orderStatus: "pending"
          }, {
            headers: {
              Authorization: request.get("Authorization")
            }
          });
          user.cart = [];
          _context5.next = 12;
          return regeneratorRuntime.awrap(user.save());

        case 12:
          response.send(response.data);
          _context5.next = 17;
          break;

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](6);

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[6, 15]]);
};