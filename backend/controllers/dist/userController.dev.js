"use strict";

var User = require("../models/user");

var asyncHandler = require("express-async-handler");

exports.sendMsg = function _callee(req, res, next) {
  var user, token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.params.id
          }));

        case 3:
          user = _context.sent;

          if (user) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(400).send("Invalid link"));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(Token.findOne({
            userId: user._id,
            token: req.params.token
          }));

        case 8:
          token = _context.sent;

          if (token) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", res.status(400).send("Invalid link"));

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(User.updateOne({
            _id: user._id,
            verified: true
          }));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(Token.findByIdAndRemove(token._id));

        case 15:
          res.send("email verified sucessfully");
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          res.status(400).send("An error occured");

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

exports.getVerify = function _callee2(req, res, next) {
  var user, token;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.params.id
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(400).send("Invalid link"));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(Token.findOne({
            userId: user._id,
            token: req.params.token
          }));

        case 8:
          token = _context2.sent;

          if (token) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.status(400).send("Invalid link"));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(User.updateOne({
            _id: user._id,
            verified: true
          }));

        case 13:
          _context2.next = 15;
          return regeneratorRuntime.awrap(Token.findByIdAndRemove(token._id));

        case 15:
          res.send("email verified sucessfully");
          _context2.next = 21;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          res.status(400).send("An error occured");

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

exports.getUsers = function (request, response, next) {
  if (request.role != "admin") throw new Error("Not Authorized.");
  User.find().then(function (data) {
    response.json(data);
  })["catch"](function (error) {
    next(error.message);
  });
};

exports.deleteUser = function (request, response, next) {
  if (request.role == "admin") {
    User.findByIdAndDelete({
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
};

exports.getUser = function (request, response, next) {
  User.findOne({
    _id: request.params.id
  }).then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};

exports.updateUser = function _callee3(request, response) {
  var updatedUser;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(request.role == "admin")) {
            _context3.next = 13;
            break;
          }

          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(request.params.id, {
            $set: request.body
          }, {
            "new": true
          }));

        case 4:
          updatedUser = _context3.sent;
          response.status(200).json(updatedUser);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          response.status(500).json(_context3.t0.message);

        case 11:
          _context3.next = 14;
          break;

        case 13:
          response.status(403).json({
            message: "Not Autorized"
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
};