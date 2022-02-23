const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    role:String,
    fullname: {
        firstName: {
            type: String,
            required: true,
            trim: true,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            max: 50,
        },
    },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    address: {
        country: {
            type: String,
            max: 100
        },
        city: {
            type: String,
            max: 100
        },
        street: {
            type: String,
            max: 100
        },
        building: {
            type: String,
            max: 100
        }
    },

    orders: [
        { type: mongoose.Types.ObjectId, ref: "order" }
    ]


})

module.exports = mongoose.model("users", customerSchema);