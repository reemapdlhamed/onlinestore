const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

<<<<<<< HEAD:models/customer.js
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
=======
    // _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true,
        max: 50,
>>>>>>> origin/dev:models/user.js
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

<<<<<<< HEAD:models/customer.js
module.exports = mongoose.model("users", customerSchema);
=======
module.exports = mongoose.model("user", userSchema);
>>>>>>> origin/dev:models/user.js
