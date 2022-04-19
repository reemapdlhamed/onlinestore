"use strict";

var _require = require("express-validator"),
    validationResult = _require.validationResult;

var jwt = require("jsonwebtoken");

var User = require("../models/user");

var sendEmail = require("../service/emailTransptor");

var Seller = require("../models/seller");

var bcrypt = require("bcrypt");

var _require2 = require("express/lib/response"),
    redirect = _require2.redirect;

var ls = require("local-storage");

var res = require("express/lib/response");

var axios = require("axios"); // manages http requests


require("dotenv").config();

var asyncHandler = require("express-async-handler");

var _require3 = require("google-auth-library"),
    OAuth2Client = _require3.OAuth2Client;

var googleClient = new OAuth2Client({
  clientId: "".concat(process.env.GOOGLE_CLIENT_ID)
});

exports.userLogin = function (request, response, next) {
  User.findOne({
    email: request.body.email
  }).then(function (data) {
    if (data == null) {
      throw new Error("email not found1");
    }

    encrypted = data.password;
    bcrypt.compare(request.body.password, encrypted).then(function (result) {
      if (result) {
        var accessToken = jwt.sign({
          role: data.role,
          id: data._id,
          email: data.email
        }, process.env.SECRET_KEY, {
          expiresIn: "365d"
        });
        response.json({
          data: data,
          accessToken: accessToken
        }); // response.redirect("http://127.0.0.1:5500/index.html")
      } else {
        next(new Error("wrong pass"));
      }
    });
  })["catch"](function (error) {//next(error.message);
  });
};

exports.changePass = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  } // console.log("tokennnnnnnnnnnnnnnnnnnnnnnnnnnnn")
  // console.log(ls("token"))
  // console.log("TOKEN TESTS");
  // console.log("Req.role: ", request.role);
  // console.log("Req.id: ", request.id); //working


  User.findOne({
    email: request.body.email
  }).then(function (data) {
    if (data.role != request.role || data.email != request.email) next(Error("login first plz"));

    if (data == null) {
      throw new Error("email not found");
    }

    var matched = bcrypt.compareSync(request.body.password, data.password);

    if (matched && request.body.newPassword == request.body.newPasswordConfirm) {
      User.findByIdAndUpdate(data._id, {
        $set: {
          password: bcrypt.hashSync(request.body.newPassword, 10)
        }
      }).then(function (data) {
        if (data == null) next(new Error("User not found"));
        response.json({
          message: "password changed"
        }); // else response.redirect("http://127.0.0.1:5500/index.html")
      });
    } else {
      throw new Error("password in incorrect or not matched");
    }
  })["catch"](function (error) {
    // error.message = "error happened while login3";
    next(error.message);
  });
};

exports.register = asyncHandler(function _callee(request, response, next) {
  var errors, error, hashed, user, newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //Validation
          errors = validationResult(request);

          if (errors.isEmpty()) {
            _context.next = 6;
            break;
          }

          error = new Error();
          error.status = 422;
          error.message = errors.array().reduce(function (current, object) {
            return current + object.msg + " ";
          }, "");
          throw error;

        case 6:
          hashed = bcrypt.hashSync(request.body.password, 10);
          user = new User({
            name: request.body.name,
            email: request.body.email,
            password: hashed
          });
          _context.prev = 8;
          _context.next = 11;
          return regeneratorRuntime.awrap(user.save());

        case 11:
          newUser = _context.sent;
          response.status(201).json(newUser);
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](8);
          _context.t0.status = 400;
          next(_context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 15]]);
});

exports.updateUser = function (request, response, next) {
  var errors = validationResult(request);

  if (!errors.isEmpty()) {
    var error = new Error();
    error.status = 422;
    error.message = errors.array().reduce(function (current, object) {
      return current + object.msg + " ";
    }, "");
    throw error;
  } // console.log("tokennnnnnnnnnnnnnnnnnnnnnnnnnnnn")
  // console.log(ls("token"))
  // console.log("TOKEN TESTS");
  // console.log("Req.role: ", request.role);
  // console.log("Req.id: ", request.id); //working


  User.findOne({
    email: request.body.email
  }).then(function (data) {
    if (data.role != request.role || data.email != request.email) next(Error("login first plz"));

    if (data == null) {
      throw new Error("email not found");
    }

    User.findByIdAndUpdate(data._id, {
      $set: {
        address: request.body.address,
        phone: request.body.phone,
        name: request.body.name
      }
    }).then(function (data) {
      if (data == null) next(new Error("User not fount"));
      response.json({
        message: "data updated"
      }); // else response.redirect("http://127.0.0.1:5500/index.html")
    });
  })["catch"](function (error) {
    // error.message = "error happened while login3";
    next(error.message);
  });
}; //send verification email


exports.sendVerificationEmail = function _callee2(req, res, next) {
  var infoHash, user, key, token, link, html;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          infoHash = {};
          user = req.user;
          infoHash.user = user;
          infoHash.id = user._id;
          key = eval(process.env.mail_key);
          token = jwt.sign(infoHash, key, {
            expiresIn: "24h"
          });
          link = "".concat(process.env.BASE_URL, "/user/verify/").concat(user._id, "/").concat(token); //generate html code

          html = "<h3 style=\"color:blue;\">Hello, ".concat(user.fullName, "</h3>\n    <p>E-mail verification was requested for this email address ").concat(user.email, ". If you requested this verification, click the link below :</p>\n    <p>\n    <p style=\"color:red;\">This link is expired with in 24 hrs</p>\n      <a style=\"background-color:blue; color:white;padding:10px 20px;text-decoration:none; font-weight:bold;border-radius:7px\" href=\"").concat(link, "\">Verify Your Email</a>\n    </p>");
          _context2.next = 11;
          return regeneratorRuntime.awrap(sendEmail(user.email, "Verify Email", html));

        case 11:
          res.status(201).json({
            data: "Registration successful ,An Email sent to your account please verify",
            token: token
          });
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
}; //verify email on link sent


exports.emailVerify = function _callee3(req, res, next) {
  var key, user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          key = process.env.mail_key;
          _context3.next = 4;
          return regeneratorRuntime.awrap(userVerify(req, key));

        case 4:
          user = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(user.update({
            verified: true
          }));

        case 7:
          res.status(200).json("mail verified success");
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.forgotPassword = function _callee4(req, res, next) {
  var email, user, access_token, url;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          email = req.body.email;
          _context4.next = 4;
          return regeneratorRuntime.awrap(user.findOne({
            email: email
          }));

        case 4:
          user = _context4.sent;

          if (user) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            msg: "This email does not exist."
          }));

        case 7:
          access_token = createAccessToken({
            id: user._id
          });
          url = "".concat(CLIENT_URL, "/user/reset/").concat(access_token);
          sendMail(email, url, "Reset your password");
          return _context4.abrupt("return", res.json({
            msg: "Re-send the password, please check your email."
          }));

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            msg: err.message
          }));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.resetPassword = function _callee5(req, res) {
  var password, passwordHash;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          password = req.body.password;
          _context5.next = 4;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 4:
          passwordHash = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(User.findOneAndUpdate({
            _id: req.user.id
          }, {
            password: passwordHash
          }));

        case 7:
          res.json({
            msg: "Password successfully changed!"
          });
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            msg: _context5.t0.message
          }));

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getAccessToken = function (req, res) {
  try {
    var rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({
      msg: "Please login now!"
    });
    jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, function (err, user) {
      if (err) return res.status(400).json({
        msg: "Please login now!"
      });
      var access_token = createAccessToken({
        id: user.id
      });
      res.json({
        access_token: access_token
      });
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message
    });
  }
};

exports.googleLogin = function _callee6(req, res) {
  var tokenId, verify, _verify$payload, email_verified, email, name, password, passwordHash, user, isMatch, newUser, refresh_token;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          tokenId = req.body.tokenId;
          _context6.next = 4;
          return regeneratorRuntime.awrap(googleClient.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID
          }));

        case 4:
          verify = _context6.sent;
          _verify$payload = verify.payload, email_verified = _verify$payload.email_verified, email = _verify$payload.email, name = _verify$payload.name;
          password = email + process.env.GOOGLE_SECRET_KEY;
          _context6.next = 9;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 9:
          passwordHash = _context6.sent;

          if (email_verified) {
            _context6.next = 12;
            break;
          }

          return _context6.abrupt("return", res.status(400).json({
            msg: "Email verification failed."
          }));

        case 12:
          _context6.next = 14;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 14:
          user = _context6.sent;

          if (!user) {
            _context6.next = 24;
            break;
          }

          _context6.next = 18;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 18:
          isMatch = _context6.sent;

          if (isMatch) {
            _context6.next = 21;
            break;
          }

          return _context6.abrupt("return", res.status(400).json({
            msg: "Password is incorrect."
          }));

        case 21:
          /*
          const refresh_token = createRefreshToken({ id: user._id });
          res.cookie("refreshtoken", refresh_token, {
          httpOnly: true,
          path: "/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          });
          */
          axios({
            method: "post",
            url: "http://localhost:8080/login",
            data: {
              email: email,
              password: password
            }
          }).then(function (res2) {
            var data = res2.data.data;
            res.json({
              data: {
                "email": data.email,
                "id": data._id,
                "accessToken": res2.data.accessToken
              }
            });
          })["catch"](function (er) {// console.log("ER", er);
          });
          _context6.next = 30;
          break;

        case 24:
          newUser = new User({
            name: name,
            email: email,
            role: "customer",
            password: passwordHash
          });
          _context6.next = 27;
          return regeneratorRuntime.awrap(newUser.save());

        case 27:
          refresh_token = createRefreshToken({
            id: newUser._id
          });
          res.cookie("refreshtoken", refresh_token, {
            httpOnly: true,
            path: "/user/refresh_token",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days

          });
          res.json({
            msg: "Login success!"
          });

        case 30:
          _context6.next = 35;
          break;

        case 32:
          _context6.prev = 32;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            msg: _context6.t0.message
          }));

        case 35:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 32]]);
};

exports.facebookLogin = function _callee7(req, res) {
  var _req$body, accessToken, userID, URL, data, email, name, picture, password, passwordHash, user, isMatch, refresh_token, newUser, _refresh_token;

  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body = req.body, accessToken = _req$body.accessToken, userID = _req$body.userID;
          URL = "https://graph.facebook.com/v2.9/".concat(userID, "/?fields=id,name,email,picture&access_token=").concat(accessToken);
          _context7.next = 5;
          return regeneratorRuntime.awrap(fetch(URL).then(function (res) {
            return res.json();
          }).then(function (res) {
            return res;
          }));

        case 5:
          data = _context7.sent;
          email = data.email, name = data.name, picture = data.picture;
          password = email + process.env.FACEBOOK_SECRET;
          _context7.next = 10;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 10:
          passwordHash = _context7.sent;
          _context7.next = 13;
          return regeneratorRuntime.awrap(Users.findOne({
            email: email
          }));

        case 13:
          user = _context7.sent;

          if (!user) {
            _context7.next = 25;
            break;
          }

          _context7.next = 17;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 17:
          isMatch = _context7.sent;

          if (isMatch) {
            _context7.next = 20;
            break;
          }

          return _context7.abrupt("return", res.status(400).json({
            msg: "Password is incorrect."
          }));

        case 20:
          refresh_token = createRefreshToken({
            id: user._id
          });
          res.cookie("refreshtoken", refresh_token, {
            httpOnly: true,
            path: "/user/refresh_token",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days

          });
          res.json({
            msg: "Login success!"
          });
          _context7.next = 31;
          break;

        case 25:
          newUser = new Users({
            name: name,
            email: email,
            password: password,
            avatar: picture.data.url
          });
          _context7.next = 28;
          return regeneratorRuntime.awrap(newUser.save());

        case 28:
          _refresh_token = createRefreshToken({
            id: newUser._id
          });
          res.cookie("refreshtoken", _refresh_token, {
            httpOnly: true,
            path: "/user/refresh_token",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days

          });
          res.json({
            data: {
              email: email
            }
          });

        case 31:
          _context7.next = 36;
          break;

        case 33:
          _context7.prev = 33;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).json({
            msg: _context7.t0.message
          }));

        case 36:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 33]]);
};

exports.activateEmail = function _callee8(req, res) {
  var activation_token, user, name, email, password, check, newUser;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          activation_token = req.body.activation_token;
          user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);
          name = user.name, email = user.email, password = user.password;
          _context8.next = 6;
          return regeneratorRuntime.awrap(Users.findOne({
            email: email
          }));

        case 6:
          check = _context8.sent;

          if (!check) {
            _context8.next = 9;
            break;
          }

          return _context8.abrupt("return", res.status(400).json({
            msg: "This email already exists."
          }));

        case 9:
          newUser = new Users({
            name: name,
            email: email,
            password: password
          });
          _context8.next = 12;
          return regeneratorRuntime.awrap(newUser.save());

        case 12:
          res.json({
            msg: "Account has been activated!"
          });
          _context8.next = 18;
          break;

        case 15:
          _context8.prev = 15;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).json({
            msg: _context8.t0.message
          }));

        case 18:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 15]]);
};