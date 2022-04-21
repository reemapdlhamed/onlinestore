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
    discount: request.body.discount,
    totalPrice: request.body.totalPrice,
    shippingPrice: request.body.shippingPrice,
    paymentType: request.body.paymentType
  });
  object.save().then(function (data) {
    response.status(201).json({
      message: "order added",
      data: data
    });
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
// exports.getOrders = (request, response, next) => {
//   if (request.role == "admin") {
//     order
//       .find({})
//       .then((data) => {
//         response.status(200).json(data);
//       })
//       .catch((error) => {
//         next(error);
//       });
//   } else {
//     throw new Error("Not Authorized. Only admin can do that");
//   }
// };


exports.getOrders = function _callee(request, response, next) {
  var qNew, orders;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          qNew = request.query["new"];

          if (!(request.role == "admin")) {
            _context.next = 20;
            break;
          }

          _context.prev = 2;

          if (!qNew) {
            _context.next = 9;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(order.find().sort({
            createdAt: -1
          }).limit(5));

        case 6:
          orders = _context.sent;
          _context.next = 12;
          break;

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(order.find());

        case 11:
          orders = _context.sent;

        case 12:
          response.status(200).json(orders);
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          response.status(500).json(_context.t0);

        case 18:
          _context.next = 21;
          break;

        case 20:
          throw new Error("Not Authorized. Only admin can do that");

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 15]]);
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


exports.updateOrder = function _callee2(req, res) {
  var updatedOrder;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(req.role == "admin")) {
            _context2.next = 13;
            break;
          }

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(order.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 4:
          updatedOrder = _context2.sent;
          res.status(200).json(updatedOrder);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json(_context2.t0.message);

        case 11:
          _context2.next = 14;
          break;

        case 13:
          response.status(403).json({
            message: "Not Autorized"
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //GET ORDER


exports.getOrder = function (request, response, next) {
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