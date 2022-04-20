"use strict";

var nodemailer = require("nodemailer");

var sendEmail = function sendEmail(email, subject, text) {
  var transporter;
  return regeneratorRuntime.async(function sendEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: true,
            auth: {
              user: process.env.hashed_user,
              pass: process.env.hashed_pass
            }
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
          }));

        case 4:
          console.log("email sent sucessfully");
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log("email not sent");
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports = sendEmail;