"use strict";

var mongoose = require("mongoose");

var order = require("./../models/order");

var express = require("express");

var _require = require("express-validator"),
    validationResult = _require.validationResult; //create new order


exports.createOrders = function (request, response, next) {
  var paymentStatu;

  if (request.body.paymentType === "cod") {
    paymentStatu = "pending";
  } else if (request.body.paymentType === "card") {
    paymentStatu = "completed";
  }

  var object = new order({
    customerName: request.body.customerName,
    customerID: request.body.customerID,
    phoneNumber: request.body.phoneNumber,
    shippingAddress: request.body.shippingAddress,
    orderItems: request.body.orderItems,
    orderDate: request.body.orderDate,
    orderStatus: request.body.orderStatus,
    paymentStatus: paymentStatu,
    totalPrice: request.body.totalPrice,
    shippingPrice: request.body.shippingPrice,
    paymentType: request.body.paymentType
  });
  object.save().then(function (data) {
    response.status(201).json({
      message: "order added",
      data: data
    });
    console.log("DOE");
  })["catch"](function (error) {
    return next(error.message);
  });
}; //getMyOrdersByID


exports.getMyOrdersByID = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  }

  if (request.role == "customer" || request.role == "admin") {
    order.find({
      customerID: request.params.customerId
    }).then(function (data) {
      response.status(200).json(data);
    })["catch"](function (error) {
      next(error.message);
    });
  } else {
    throw new Error("Not Authorized. Only customer can access to his order");
  }
}; //update orderStatus


exports.updateOrderStatus = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  }

  if (request.role == "admin") {
    order.findOneAndUpdate({
      _id: request.body.id
    }, {
      $set: {
        orderStatus: req.body.orderStatus
      }
    }).then(function (data) {
      response.status(201).json({
        message: "order Status updated",
        data: data
      });
    })["catch"](function (error) {
      next(error);
    });
  } else {
    throw new Error("Not Authorized. Only admin can do that");
  }
}; //get Orders


exports.getOrders = function (request, response, next) {
  if (request.role == "admin") {
    order.find({}).then(function (data) {
      response.status(200).json(data);
    })["catch"](function (error) {
      next(error);
    });
  } else {
    throw new Error("Not Authorized. Only admin can do that");
  }
}; //update updateOrderToPaid


exports.updateOrderToPaid = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  }

  if (request.role == "admin") {
    order.findOneAndUpdate({
      _id: request.body.id
    }, {
      $set: {
        paymentStatus: req.body.paymentStatus,
        paymentType: req.body.paymentType
      }
    }).then(function (data) {
      response.status(201).json({
        message: "payment Status updated",
        data: data
      });
    })["catch"](function (error) {
      next(error);
    });
  } else {
    throw new Error("Not Authorized. Only admin can do that");
  }
}; // delete order
//   exports.deleteOrder = (request, response, next) => {
//   let errors = validationResult(request);
//   if (!errors.isEmpty()) {
//     let error = new Error();
//     error.status = 422;
//     error.message = errors
//       .array()
//       .reduce((current, object) => current + object.msg + " ", "");
//     throw error;
//   }
//   if (request.role == "admin" || request.role == "customer") {
//     order
//       .findByIdAndDelete({ orderItems: request.body.orderItems })
//       .then((data) => {
//         if (data == null) throw new Error("order Is not Found!");
//         response.status(200).json({ message: "deleted" });
//       })
//       .catch((error) => next(error));
//   } else {
//     throw new Error("Not Authorized. Only admin or customer can do that");
//   }
// };


exports.deleteOrder = function (request, response, next) {
  if (request.role == "admin") {
    order.findByIdAndDelete({
      _id: request.params.id
    }).then(function (data) {
      response.status(201).json({
        message: "deleted",
        data: data
      });
    })["catch"](function (error) {
      next(error);
    });
  } else {
    response.status(403).json({
      message: "Not Autorized"
    });
  }
}; //UPDATE ORDER


exports.updateOrder = function _callee(req, res) {
  var updatedOrder;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);

          if (!(req.role == "admin")) {
            _context.next = 14;
            break;
          }

          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(order.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 5:
          updatedOrder = _context.sent;
          res.status(200).json(updatedOrder);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          res.status(500).json(_context.t0.message);

        case 12:
          _context.next = 15;
          break;

        case 14:
          response.status(403).json({
            message: "Not Autorized"
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
}; //GET ORDER


exports.getOrder = function (request, response, next) {
  console.log(request.params);
  order.findOne({
    _id: request.params.id
  }).then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};