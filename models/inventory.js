//Manzlawy With Team
const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,

    productID:{
        String,
        ref:"product",
        },

    quantity:Number,
});


module.exports = mongoose.model("inventory", inventorySchema);