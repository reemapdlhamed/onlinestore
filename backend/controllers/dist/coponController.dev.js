"use strict";

var mongoose = require("mongoose");

var Copon = require("./../models/copon");

var User = require("./../models/user");

var express = require("express");

var _require = require("express-validator"),
    validationResult = _require.validationResult;

exports.addCopon = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  }

  var object = new Copon({
    value: request.body.value,
    code: request.body.code,
    cust_copon: request.body.custID + request.body.code,
    custID: request.body.custID
  });
  User.find({
    _id: request.body.custID
  }).then(function (data) {
    if (data.length === 0) {
      response.status(401).json({
        message: "error",
        data: data
      });
    } else {
      object.save().then(function (data) {
        response.status(201).json({
          message: "copon made",
          data: data
        });
      })["catch"](function (error) {
        return next(error);
      });
    }
  })["catch"](function (error) {
    next(error.message);
  });
};

exports.validCopon = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  }

  User.find({
    _id: request.body.custID
  }).then(function (data) {
    if (data.length === 0) {
      response.status(401).json({
        message: "error",
        data: data
      });
    } else {
      Copon.find({
        cust_copon: request.body.custID + request.body.code
      }).then(function (data) {
        if (data.length === 0) {
          console.log("A");
          response.status(201).json({
            message: "ok",
            data: data
          });
        } else {
          response.status(401).json({
            message: "error",
            data: data
          });
        }
      });
    }
  })["catch"](function (error) {
    response.status(401).json({
      message: "error",
      data: data
    });
  });
};