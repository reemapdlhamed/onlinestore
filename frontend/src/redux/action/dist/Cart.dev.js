"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goToHome = exports.clearLocalStorageCart = exports.saveShippingAddress = void 0;

var _reactRouterDom = require("react-router-dom");

// SAVE SHIPPING ADDRESS
var saveShippingAddress = function saveShippingAddress(list) {
  return {
    type: "GET_ADDRESS",
    payload: list
  };
};

exports.saveShippingAddress = saveShippingAddress;

var clearLocalStorageCart = function clearLocalStorageCart() {
  return function (dispatch) {
    dispatch({
      type: 'CLEAR_CART'
    }); //localStorage.removeItem('persist:root');
  };
};

exports.clearLocalStorageCart = clearLocalStorageCart;

var goToHome = function goToHome() {
  return function (dispatch) {
    var history = (0, _reactRouterDom.useHistory)();
    dispatch({
      type: 'GO_HOME'
    });
    history.push("/");
  };
};

exports.goToHome = goToHome;