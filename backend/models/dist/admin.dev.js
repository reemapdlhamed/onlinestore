"use strict";

var mongoose = require("mongoose");

var adminSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("admin", adminSchema);