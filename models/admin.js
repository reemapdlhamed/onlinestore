const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({


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



})

module.exports = mongoose.model("admin", adminSchema)