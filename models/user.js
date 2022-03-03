const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
    max: 50
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["customer", "admin", "seller"],
    default: "customer",
  },

  address: {
    country: {
      type: String,
      max: 100,
    },
    city: {
      type: String,
      max: 100,
    },
    street: {
      type: String,
      max: 100,
    },
    building: {
      type: String,
      max: 100,
    },
  },
  cart: [   
    {
      product_id: {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
      quantity: { type: Number, min: 1, max: 100 },
      

    },
  ],

  orders: [{ type: mongoose.Types.ObjectId, ref: "order" }],
  //Values of types arrays and objects are stored as empty in DB
  //I could fix this by giving a default as undefined
  //TODO: SEARH THIS

  phone: {
    type: String,
  },

  products: [{ type: mongoose.Types.ObjectId, ref: "product" }],
});

module.exports = mongoose.model("user", userSchema);
