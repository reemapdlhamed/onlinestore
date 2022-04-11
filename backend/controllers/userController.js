const User = require("../models/user");

exports.getUsers = (request, response, next) => {
  if (request.role != "admin") throw new Error("Not Authorized.");

  User.find()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      next(error.message);
    });
};
