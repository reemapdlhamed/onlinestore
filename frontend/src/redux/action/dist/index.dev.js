"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroCart = exports.delCart = exports.addOrdersFromDB = exports.addCartFromDB = exports.addCartFirst = exports.addCart = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// For Add Item to Cart
var addCart = function addCart(product) {
  return {
    type: "ADDITEM",
    payload: product
  };
};

exports.addCart = addCart;

var addCartFirst = function addCartFirst(product) {
  return {
    type: "ADDITEMFIRST",
    payload: product
  };
};

exports.addCartFirst = addCartFirst;

var addCartFromDB = function addCartFromDB(productArr) {
  return {
    type: "ADDITEMS",
    payload: productArr
  };
};

exports.addCartFromDB = addCartFromDB;

var addOrdersFromDB = function addOrdersFromDB(productsArr) {
  return {
    type: "ADDORDERS",
    payload: productsArr
  };
}; // For Delete Item From Cart


exports.addOrdersFromDB = addOrdersFromDB;

var delCart = function delCart(product) {
  return {
    type: "DELITEM",
    payload: product
  };
}; // For Delete Item From Cart


exports.delCart = delCart;

var zeroCart = function zeroCart(product) {
  return {
    type: "ZEROITEM",
    payload: product
  };
};

exports.zeroCart = zeroCart;