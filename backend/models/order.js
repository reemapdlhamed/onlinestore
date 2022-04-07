const mongoose = require("mongoose");
const req = false;
const orderSchema = new mongoose.Schema(
  {
    // _id: mongoose.Types.ObjectId,
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: req,
    },
    customerName: {
      type: String,
      required: req,
    },
    phoneNumber: {
      type: String,
      required: req,
    },
    shippingAddress: {
      country: {
        type: String,
        required: req,
      },
      city: {
        type: String,
        required: req,
      },

      street: {
        type: String,
        required: req,
      },
      postalCode: {
        type: String,
        required: req,
      },
      building: {
        type: String,
        required: req,
      },
    },

    orderItems: [
      {
        //productName: { type: String, required: true },
        //orderImage: { type: String, required: true },

        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
        price: {
          type: Number,
          required: req,
        },
        quantity: {
          type: Number,
          required: req,
        },
      },
    ],
    orderDate: {
      type: Date,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "packed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    totalPrice: {
      type: Number,
      required: req,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: req,
      default: 0.0,
    },
    paymentStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "completed", "cancelled", "refund"],
      required: req,
    },
    paymentType: {
      type: String,
      enum: ["cod", "card"],
      required: req,
    },
  },

  { timestamps: req }
);

module.exports = mongoose.model("order", orderSchema);
