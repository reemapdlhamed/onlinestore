const mongoose = require("mongoose");
const Category = require("./../models/category");
const express = require("express");

exports.show_category = (request, response, next) => {
  Category.find({})
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};


exports.delete_category = (request, response, next) => {
  Category.findByIdAndDelete({ _id: request.body.id })
    .then((data) => {
      response.status(201).json({ message: "deleted", data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.update_category = (request, response, next) => {
  Category.findByIdAndUpdate(
    { _id: request.body.id },
    {
      $set: {
        name: request.body.name,
        description: request.body.description,
        bannerImage: request.body.bannerImage,
      },
    })
    .then((data) => {
      response.status(201).json({ message: " updated", data });
    })
    .catch((error) => {
      next(error);
    });
  };

exports.add_category = (request, response, next) => {
  let object = new Category({
    // _id: auto_id,
    name: request.body.name,
    description: request.body.description,
    bannerImage: request.body.bannerImage,
  });
  object
    .save()
    .then((data) => {
      response.status(201).json({ message: "added", data });
    })
    .catch((error) => next(error));
  //   });
};
