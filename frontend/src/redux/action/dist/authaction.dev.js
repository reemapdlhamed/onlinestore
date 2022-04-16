"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchGetUser = exports.fetchUser = exports.dispatchLogin = exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ACTIONS = {
  LOGIN: 'LOGIN',
  GET_TOKEN: 'GET_TOKEN',
  GET_USER: 'GET_USER',
  GET_ALL_USERS: 'GET_ALL_USERS'
};
var _default = ACTIONS;
exports["default"] = _default;

var dispatchLogin = function dispatchLogin() {
  return {
    type: ACTIONS.LOGIN
  };
};

exports.dispatchLogin = dispatchLogin;

var fetchUser = function fetchUser(token) {
  var res;
  return regeneratorRuntime.async(function fetchUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get('/user/infor', {
            headers: {
              Authorization: token
            }
          }));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.fetchUser = fetchUser;

var dispatchGetUser = function dispatchGetUser(res) {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user: res.data,
      isAdmin: res.data.role === 1 ? true : false
    }
  };
};

exports.dispatchGetUser = dispatchGetUser;