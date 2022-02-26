const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema({

    // _id: mongoose.Types.ObjectId,

    userId: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
    
    },


})

module.exports = mongoose.model("passwords", passwordSchema);