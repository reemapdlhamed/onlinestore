const mongoose = require("mongoose");
const message = require("../models/message");
const express = require("express");
const { validationResult } = require("express-validator");

exports.addMessage = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      let error = new Error();
      error.status = 422;
      error.message = errors
        .array()
        .reduce((current, object) => current + object.msg + " ", "");
      throw error;
    }
      let object = new message({
        name: request.body.name,
        email: request.body.email,
        message: request.body.message,
      });
      object
        .save()
        .then((data) => {
          response.status(201).json({ message: "message sent", data });
        })
        .catch((error) => next(error));
    } 
  
    exports.showMessage = (request, response, next) => {
        message.find({})
          .then((data) => {
            response.status(200).json({ data });
          })
          .catch((error) => {
            next(error);
          });
      };

      exports.deleteMessage = (request, response, next) => {
        message.deleteOne({"name":request.body.name})
          .then((data) => {
            response.status(200).json({ message: "deleted", data });
          })
          .catch((error) => {
            next(error);
          });
      };

