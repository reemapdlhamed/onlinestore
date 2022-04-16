"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMatch = exports.isLength = exports.isEmail = exports.isEmpty = void 0;

var isEmpty = function isEmpty(value) {
  if (!value) return true;
  return false;
};

exports.isEmpty = isEmpty;

var isEmail = function isEmail(email) {
  // eslint-disable-next-line
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

exports.isEmail = isEmail;

var isLength = function isLength(password) {
  if (password.length < 6) return true;
  return false;
};

exports.isLength = isLength;

var isMatch = function isMatch(password, cf_password) {
  if (password === cf_password) return true;
  return false;
};

exports.isMatch = isMatch;