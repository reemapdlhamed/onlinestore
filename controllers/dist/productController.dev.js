"use strict";

var mongoose = require("mongoose");

var Products = require("./../models/product");

var express = require("express");

exports.show_products = function (request, response, next) {
  Products.find({
    category_id: request.body.category_id
  }).then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};

exports.add_product = function (request, response, next) {
  // let auto_id;
  // Products.find({}).then((data) => {
  //   auto_id = data.length;
  var object = new Products({
    // _id: auto_id,
    name: request.body.name,
    price: request.body.price,
    brand: request.body.brand,
    category_id: request.body.category_id,
    discount: request.body.discount,
    reviews: request.body.reviews,
    description: request.body.description,
    images: request.body.images,
    properties: request.body.properties,
    quantity: request.body.quantity,
    seller: request.body.seller
  });
  object.save().then(function (data) {
    response.status(201).json({
      message: "added",
      data: data
    });
  })["catch"](function (error) {
    return next(error);
  }); // });
};

exports.delete_product = function (request, response, next) {
  Products.findByIdAndDelete({
    _id: request.body.id
  }).then(function (data) {
    response.status(201).json({
      message: "deleted",
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};

exports.update_stock = function (request, response, next) {
  Products.findByIdAndUpdate({
    _id: request.body.id
  }, {
    $set: {
      quantity: quantity - request.body.amount
    }
  }).then(function (data) {
    response.status(201).json({
      message: "stock updated",
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};

exports.update_product = function (request, response, next) {
  Products.findByIdAndUpdate({
    _id: request.body.id
  }, {
    $set: {
      name: request.body.name,
      price: request.body.price,
      brand: request.body.brand,
      category_id: request.body.category_id,
      discount: request.body.discount,
      reviews: request.body.reviews,
      description: request.body.description,
      images: request.body.images,
      properties: request.body.properties,
      quantity: request.body.quantity,
      seller: request.body.seller
    }
  }).then(function (data) {
    response.status(201).json({
      message: " updated",
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};

exports.show_product = function (request, response, next) {
  Products.findOne({
    _id: request.params.id
  }).then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};

exports.add_review = function (request, response, next) {
  Products.updateOne({
    _id: request.body.id
  }, {
    $push: {
      reviews: request.body.new_review
    }
  }).then(function (data) {
    response.status(201).json({
      message: " review added",
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};