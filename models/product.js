//HASSAN
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  name: { type: String, required: true, trim: true, max: 50 },
  price: { type: Number, required: true },
  brand: { type: String, required: true, max: 50 },
  seller: {
    userID: { type: Number, required: true, ref: "user" },
    name: { type: String, required: true, max: 20 },
  },
  category_id: {
    type: mongoose.Types.ObjectId,
    // type: Number,
    required: true,
    ref: "category",
  },
  discount: { type: Number, required: false },
  reviews: [
    {
      userID: {
        type: mongoose.Types.ObjectId,
        // type: Number,
        required: true,
        ref: "user",
      },
      title: { type: String, required: true },
      description: { type: String, required: true },
      rating: { type: Number },
      user: String,
    },
  ],
  description: { type: String, required: false },
  images: [String],
  properties: { type: Object, required: false },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("product", productSchema);
