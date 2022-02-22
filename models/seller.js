//Adel
const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        products: [
            {
                type: mongoose.Types.ObjectId, ref: "product"
            }
        ],

        // fullname:{
        //     firstName: {
        //         type: String,
        //         required: true,
        //         trim: true,
        //         max: 50,
        //     },
        //     lastName: {
        //         type: String,
        //         required: true,
        //         trim: true,
        //         max: 50,
        //     },
        // },

        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            min: 5,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            max: 50,

        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 100,
        },



        phoneNumber: { type: String },
        // pofilePicture: { type: String },
    },
    { timestamps: true }
);
module.exports = mongoose.model("seller", sellerSchema);