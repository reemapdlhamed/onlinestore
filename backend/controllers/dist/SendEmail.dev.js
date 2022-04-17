"use strict";

var nodemailer = require('nodemailer');

var _require = require('googleapis'),
    google = _require.google;

var OAuth2 = google.auth.OAuth2;
var OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
var _process$env = process.env,
    MAILING_SERVICE_CLIENT_ID = _process$env.MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET = _process$env.MAILING_SERVICE_CLIENT_SECRET,
    MAILING_SERVICE_REFRESH_TOKEN = _process$env.MAILING_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS = _process$env.SENDER_EMAIL_ADDRESS;
var oauth2Client = new OAuth2(MAILING_SERVICE_CLIENT_ID, MAILING_SERVICE_CLIENT_SECRET, MAILING_SERVICE_REFRESH_TOKEN, OAUTH_PLAYGROUND); // send mail

var sendEmail = function sendEmail(to, url, txt) {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN
  });
  var accessToken = oauth2Client.getAccessToken();
  var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken: accessToken
    }
  });
  var mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: to,
    subject: "DevAT Channel",
    html: "\n            <div style=\"max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;\">\n            <h2 style=\"text-align: center; text-transform: uppercase;color: teal;\">Welcome to the DevAT channel.</h2>\n            <p>Congratulations! You're almost set to start using DEVAT\u272ESHOP.\n                Just click the button below to validate your email address.\n            </p>\n            \n            <a href=".concat(url, " style=\"background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;\">").concat(txt, "</a>\n        \n            <p>If the button doesn't work for any reason, you can also click on the link below:</p>\n        \n            <div>").concat(url, "</div>\n            </div>\n        ")
  };
  smtpTransport.sendMail(mailOptions, function (err, infor) {
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;