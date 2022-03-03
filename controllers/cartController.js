const axios = require("axios");

const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Product = require("../models/product");

const Seller = require("../models/seller");
const bcrypt = require("bcrypt");
const { redirect } = require("express/lib/response");
var ls = require("local-storage");
const res = require("express/lib/response");
require("dotenv").config();
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

exports.addToCart = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors
      .array()
      .reduce((current, object) => current + object.msg + " ", "");
    throw error;
  }

  User.findOne({ email: request.email })

    .then((data) => {
      // if (data.role != request.role /*||data.email!=request.email*/)
      //   next(Error("login first plz"));
      if (data == null) {
        throw new Error("email not found");
      }
      //FIXME: Clean later
      let product_id_var = new ObjectId(request.body.product_id);
      
      let product_obj = {
        product_id: product_id_var,
        quantity: request.body.quantity,
      };

      let cart = data.cart;

      let doesProductInCartExist = cart.find(
        (item) => item.product_id.toString() === request.body.product_id
      );
      console.log("doesProductInCartExist ", doesProductInCartExist);
      Product.exists({ _id: product_id_var })
        .then((res) => {
          if (!res || doesProductInCartExist)
            throw new Error("Product already Exist in cart");

          User.findByIdAndUpdate(data._id, {
            $push: { cart: product_obj },
          }).then((data) => {
            if (data == null) next(new Error("User not fount"));

            response.json({ message: "cart updated" });
            // else response.redirect("http://12  7.0.0.1:5500/index.html")
          });
        })
        .catch((error) => {
          // error.message = "error happened while login3";
          next(error.message);
        });

      // console.log(product_obj);
    })
    .catch((error) => {
      // error.message = "error happened while login3";
      next(error.message);
    });
};

exports.removeFromCart = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors
      .array()
      .reduce((current, object) => current + object.msg + " ", "");
    throw error;
  }

  User.findOne({ email: request.email })

    .then((data) => {
      if (data.role != request.role /*||data.email!=request.email*/)
        next(Error("login first plz"));
      if (data == null) {
        throw new Error("email not found");
      }
      let product_id_var = new ObjectId(request.body.product_id);
      let cart = data.cart;
      let doesProductInCartExist = cart.find(
        (e) => e.product_id.toString() === request.body.product_id
      );
      Product.exists({ _id: product_id_var })
        .then((res) => {
          if (!res || !doesProductInCartExist)
            next(Error("product doesnt exist"));
        })
        .catch((error) => {
          next(error.message);
        });

      User.updateOne(
        { _id: data._id },
        {
          $pull: {
            cart: { product_id: product_id_var },
          },
        }
      )
        .then((x) => response.send("DELETED"))
        .catch((err) => next(err));
    })
    .catch((error) => {
      // error.message = "error happened while login3";
      next(error.message);
    });
};

exports.updateQuantityCart = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors
      .array()
      .reduce((current, object) => current + object.msg + " ", "");
    throw error;
  }

  User.findOne({ email: request.email })

    .then((data) => {
      if (data.role != request.role /*||data.email!=request.email*/)
        next(Error("login first plz"));
      if (data == null) {
        throw new Error("email not found");
      }
      let product_id_var = new ObjectId(request.body.product_id);
      let cart = data.cart;

      let doesProductInCartExist = cart.find(
        (e) => e.product_id.toString() === request.body.product_id
      );
      Product.exists({ _id: product_id_var })
        .then((res) => {
          if (!res || !doesProductInCartExist)
            next(Error("product doesnt exit5"));
        })
        .catch((error) => {
          next(error.message);
        });
      User.findOne({ "cart.product_id": product_id_var })
        .then((doc) => {
          item = doc.cart[0];

          console.log(item);
          item.quantity = request.body.quantity;
          doc.save();
          response.json({ message: "Cart Updated", cart: doc.cart });

          //sent respnse to client
        })
        .catch((err) => {
          console.log("Oh! Dark");
          response.send("dark");
        });
    })
    .catch((error) => {
      // error.message = "error happened while login3";
      next(error.message);
    });
};

exports.confirmCart = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors
      .array()
      .reduce((current, object) => current + object.msg + " ", "");
    throw error;
  }

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  console.log(request.email);

  User.findOne({ email: request.email })

    .then((p) => {
      console.log(p);
      console.log(p);

      axios
        .post(
          "http://127.0.0.1:8080/orders",
          {
            customerID: p._id,
            customerName: p.name,
            phoneNumber: "01012345678",
            paymentType: "cod",
            orderItems: tp.car,
            shippingAddress: {
              country: "egypt",
              city: "mansoura",
              street: "street 1",
              postalCode: "37511",
              building: "building 1 ",
            },
            shippingPrice: 30,
            orderStatus: "pending",
          },
          { headers: { Authorization: request.get("Authorization") } }
        )
        .then(function (res) {
          response.send(res.data);
        });
    })

    //   axios
    //     .post(
    //       "http://127.0.0.1:8080/orders",
    //       {
    //         customerID: p._id.toString(),
    //         customerName: p._name,
    //         phoneNumber: "011",
    //         // orderItems: p.cart,
    //         // orderDate: Date.now(),
    //         totalPrice: 200,
    //         shippingAddress: {
    //           country: "egypt",
    //           city: "cairo",
    //           street: "10",
    //           postalCode: "9392",
    //           building: "7",
    //         },
    //         shippingPrice: 30,
    //         orderStatus: "pending",
    //         paymentType: "cod",
    //         paymentStatus: "pending",
    //       },
    //       { headers: { Authorization: request.get("Authorization") } }
    //     )
    //     .then(function (res) {
    //       response.send(res.data);
    //     });

    // })

    .catch((error) => {
      next(error.message);
    });

  /*
  axios.post('/createOrders', {
    firstName: 'Finn',
    lastName: 'Williams'













    body("customerID").isString().withMessage("enter Valid ID"),
    body("customerName").isString().withMessage("enter Valid Name"),
    body("phoneNumber").isNumeric().withMessage("invalid PhoneNumber."),
    body("shippingAddress").isObject().withMessage("Address should be an object"),
    body("shippingAddress.country").isString().withMessage("enter correct country"),
    body("shippingAddress.city").isString().withMessage("enter correct city"),
    body("shippingAddress.street").isString().withMessage("enter correct street"),
    body("shippingAddress.postalCode").isAlphanumeric().withMessage("enter postalCode"),
    body("shippingAddress.building").isString().withMessage("enter correct building"),
    body("orderStatus").isString().withMessage("enter orderStatus"),
    body("paymentType").isString().withMessage("enter paymentType"),
  });

*/
};
