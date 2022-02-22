//HASSAN

const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    seller_id: { type: String, required: true, ref: "seller" },
    quantity: { type: Number, required: true },
    category_id: { type: Number, required: true, ref: "category" },
    discount: { type: Number, required: false },
    reviews: { type: Array },
    description: { type: String, required: false },
    images:[String]
    // specs: { type: Subdocument, required: false }
})


module.exports = mongoose.model("product", productSchema);