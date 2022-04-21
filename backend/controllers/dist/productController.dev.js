"use strict";

var mongoose = require("mongoose");

var Products = require("./../models/product");

var express = require("express");

var _require = require("express-validator"),
    validationResult = _require.validationResult;

exports.show_products_category = function (request, response, next) {
  Products.find({
    category_id: request.params.category_id
  }).limit(request.query.more).then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
}; //--------------------------------------------------------------------------------------------


exports.show_products = function (request, response, next) {
  Products.find({}).limit(request.query.more || 1000000).then(function (data) {
    response.status(200).json({
      data: data
    });
    console.log(data.length);
  })["catch"](function (error) {
    next(error);
  });
}; //-----------------------------------------------------------------------------------------------


exports.random_products = function (request, response, next) {
  Products.find({}).limit(8).then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
}; //-----------------------------------------------------------------------------------------------


exports.search_products = function (request, response, next) {
  var s = request.body.word;
  var regex = new RegExp(s, "i");

  if (request.body.category_id == "") {
    Products.find({
      name: {
        $regex: regex
      }
    }).then(function (data) {
      response.status(200).json({
        data: data
      });
    })["catch"](function (error) {
      next(error);
    });
  } else {
    Products.find({
      name: {
        $regex: regex
      },
      category_id: request.body.category_id
    }).then(function (data) {
      response.status(200).json({
        data: data
      });
    })["catch"](function (error) {
      next(error);
    });
  }
}; //-----------------------------------------------------------------------------------------------


exports.add_product = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  }

  if (request.role == "admin" || request.role == "seller") {
    var object = new Products({
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
      rating: request.body.rating
    });
    object.save().then(function (data) {
      response.status(201).json({
        message: "added",
        data: data
      });
    })["catch"](function (error) {
      return next(error);
    });
  } else {
    response.status(404).json({
      mesg: "You should be admin or seller to add product"
    });
  } // });

}; //--------------------------------------------------------------------------------------------------
//Deleting with id in body
// exports.delete_product = (request, response, next) => {
// if (request.role == "admin") {
//   Products.findByIdAndDelete({ _id: request.body.id })
//     .then((data) => {
//       response.status(201).json({ message: "deleted", data });
//     })
//     .catch((error) => {
//       next(error);
//     });
// } else if (request.role == "seller") {
//     Products.findById({ _id: request.body.id }).then((data) => {
//       if (request.id == data.seller.userID) {
//         Products.findByIdAndDelete({ _id: request.body.id })
//           .then((data) => {
//             response.status(201).json({ message: "deleted", data });
//           })
//           .catch((error) => {
//             next(error);
//           });
//       } else {
//         response.status(404).json({ message: "You dont owne this product " });
//       }
//     });
//   } else {
//     response
//       .status(404)
//       .json({ message: "You should be admin or seller to delete product " });
//   }
// };
//Deleting with id in params


exports.delete_product = function (request, response, next) {
  console.log("delete product function");

  if (request.role == "admin") {
    console.log("role is okay");
    Products.findByIdAndDelete({
      _id: request.params.id
    }).then(function (data) {
      console.log("id:", request.params.id);
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
}; //-------------------------------------------------------------------------------------------------------


exports.update_stock = function (request, response, next) {
  console.log("BODY"); // let errors = validationResult(request);
  // if (!errors.isEmpty()) {
  //   let error = new Error();
  //   error.status = 422;
  //   error.message = errors
  //     .array()
  //     .reduce((current, object) => current + object.msg + " ", "");
  //   throw error;
  // }

  var _loop = function _loop(i) {
    Products.findById({
      _id: request.body.orderItems[i]._id
    }).then(function (data) {
      if (data.quantity - request.body.orderItems[i].quantity >= 0) {
        Products.findByIdAndUpdate({
          _id: request.body.orderItems[i]._id
        }, {
          $set: {
            quantity: data.quantity - request.body.orderItems[i].quantity
          }
        }).then(function (data) {
          response.status(201).json({
            message: "stock updated",
            data: data
          });
        })["catch"](function (error) {
          next(error);
        });
      } else {
        response.status(201).json({
          message: "Not engouh in stock",
          "In Stock": data.quantity
        });
      }
    })["catch"](function (error) {
      next(error);
    });
  };

  for (var i = 0; i < request.body.orderItems.length; i++) {
    _loop(i);
  } // 

};

exports.update_product = function _callee(req, res) {
  var updatedProduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Products.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 3:
          updatedProduct = _context.sent;
          res.status(200).json(updatedProduct);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //-------------------------------------------------------------------------------------------------------------
// exports.update_product = (request, response, next) => {
//   if (request.role == "admin") {
//     Products.findByIdAndUpdate(
//       { _id: request.body.id },
//       {
//         $set: {
//           name: request.body.name,
//           price: request.body.price,
//           brand: request.body.brand,
//           category_id: request.body.category_id,
//           discount: request.body.discount,
//           reviews: request.body.reviews,
//           description: request.body.description,
//           images: request.body.images,
//           properties: request.body.properties,
//           quantity: request.body.quantity,
//           rating: request.body.rating,
//         },
//       }
//     )
//       .then((data) => {
//         response.status(201).json({ message: " updated", data });
//       })
//       .catch((error) => {
//         next(error);
//       });
//   } else if (request.role == "seller") {
//     Products.findById({ _id: request.body.id }).then((data) => {
//       if (request.id == data.seller.userID) {
//         Products.findByIdAndUpdate(
//           { _id: request.body.id },
//           {
//             $set: {
//               name: request.body.name,
//               price: request.body.price,
//               brand: request.body.brand,
//               category_id: request.body.category_id,
//               discount: request.body.discount,
//               reviews: request.body.reviews,
//               description: request.body.description,
//               images: request.body.images,
//               properties: request.body.properties,
//               quantity: request.body.quantity,
//               rating: request.body.rating,
//             },
//           }
//         )
//           .then((data) => {
//             response.status(201).json({ message: " updated", data });
//           })
//           .catch((error) => {
//             next(error);
//           });
//       } else {
//         response.status(404).json({ message: "You dont owne this product " });
//       }
//     });
//   } else {
//     response
//       .status(404)
//       .json({ message: "You should be admin or seller to delete product " });
//   }
// };
//------------------------------------------------------------------------------------------------------------
// exports.update_product = (request, response, next) => {
//   if (request.role == "admin") {
//     Products.findByIdAndUpdate(
//       { _id: request.body.id },
//       {
//         $set: {
//           name: request.body.name,
//           price: request.body.price,
//           brand: request.body.brand,
//           category_id: request.body.category_id,
//           discount: request.body.discount,
//           reviews: request.body.reviews,
//           description: request.body.description,
//           images: request.body.images,
//           properties: request.body.properties,
//           quantity: request.body.quantity,
//           seller: request.body.seller,
//         },
//       }
//     )
//       .then((data) => {
//         response.status(201).json({ message: " updated", data });
//       })
//       .catch((error) => {
//         next(error);
//       });
//   } else if (request.role == "seller") {
//     Products.findById({ _id: request.body.id }).then((data) => {
//       if (request.id == data.seller.userID) {
//         Products.findByIdAndUpdate(
//           { _id: request.body.id },
//           {
//             $set: {
//               name: request.body.name,
//               price: request.body.price,
//               brand: request.body.brand,
//               category_id: request.body.category_id,
//               discount: request.body.discount,
//               reviews: request.body.reviews,
//               description: request.body.description,
//               images: request.body.images,
//               properties: request.body.properties,
//               quantity: request.body.quantity,
//               seller: request.body.seller,
//             },
//           }
//         )
//           .then((data) => {
//             response.status(201).json({ message: " updated", data });
//           })
//           .catch((error) => {
//             next(error);
//           });
//       } else {
//         response.status(404).json({ message: "You dont owne this product " });
//       }
//     });
//   } else {
//     response
//       .status(404)
//       .json({ message: "You should be admin or seller to delete product " });
//   }
// };
//------------------------------------------------------------------------------------------------------------


exports.show_product = function (request, response, next) {
  Products.find({
    _id: request.params.id
  }).populate("category_id").then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
}; //----------------------------------------------------------------------------------------------------------


exports.add_review = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  }

  console.log(request.role);

  if (request.role == "customer") {
    Products.updateOne({
      _id: request.body.id
    }, {
      $push: {
        reviews: request.body.new_review
      }
    }).then(function (data) {
      response.status(201).json({
        message: "review added",
        data: data
      });
    })["catch"](function (error) {
      next(error);
    });
  } else {
    response.status(404).json({
      message: "your are not signed as customer"
    });
  }
}; //-----------------------------------------------------------------------------------------------------------


exports.show_reviews = function (request, response, next) {
  Products.find({
    "reviews.userID": request.body.id
  }, {
    "reviews.$": 1
  }).then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
}; //------------------------------------------------------------------------------------------------------------


exports.edit_review = function (request, response, next) {
  Products.updateOne({
    "reviews._id": request.body.id
  }, {
    $set: {
      "reviews.$.title": request.body.title,
      "reviews.$.description": request.body.description,
      "reviews.$.rating": request.body.rating
    }
  }).then(function (data) {
    response.status(200).json({
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
}; //-----------------------------------------------------------------------------------------------------------


exports.delete_review = function (request, response, next) {
  Products.updateOne({
    "reviews._id": request.body.id
  }, {
    $pull: {
      reviews: {
        _id: request.body.id
      }
    }
  }).then(function (data) {
    response.status(200).json({
      message: "deleted",
      data: data
    });
  })["catch"](function (error) {
    next(error);
  });
};