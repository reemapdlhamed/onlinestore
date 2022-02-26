const mongoose = require("mongoose");
const Products = require("./../models/product");
const express = require("express");

exports.show_products = (request, response, next) => {
  Products.find({ category_id: request.body.category_id })
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.add_product = (request, response, next) => {
  // let auto_id;
  // Products.find({}).then((data) => {
  //   auto_id = data.length;
  let object = new Products({
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
    seller: request.body.seller,
  });
  object
    .save()
    .then((data) => {
      response.status(201).json({ message: "added", data });
    })
    .catch((error) => next(error));
  // });
};

exports.delete_product = (request, response, next) => {
  Products.findByIdAndDelete({ _id: request.body.id })
    .then((data) => {
      response.status(201).json({ message: "deleted", data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.update_stock = (request, response, next) => {
  Products.findByIdAndUpdate(
    { _id: request.body.id },
    {
      $set: {
        quantity: quantity - request.body.amount,
      },
    }
  )
    .then((data) => {
      response.status(201).json({ message: "stock updated", data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.update_product = (request, response, next) => {
  Products.findByIdAndUpdate(
    { _id: request.body.id },
    {
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
        seller: request.body.seller,
      },
    }
  )
    .then((data) => {
      response.status(201).json({ message: " updated", data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.show_product = (request, response, next) => {
  Products.findOne({ _id: request.params.id })
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      next(error);
    });
};

exports.add_review = (request, response, next) => {
  Products.updateOne(
    { _id: request.body.id },
    { $push: { reviews: request.body.new_review } }
  )
    .then((data) => {
      response.status(201).json({ message: " review added", data });
    })
    .catch((error) => {
      next(error);
    });
};
