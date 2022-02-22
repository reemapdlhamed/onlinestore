const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "customer",
            required: true,
        },
        address: {
            type: String,
            // ref: "customer.address",
            required: true,
        },
        items: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product",
                },
                price: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        orderStatus:
        {   //hmmmm
            type: {
                type: String,
                enum: ["pending", "packed", "shipped", "delivered", "cancelled"],
                default: "pending",
            },
            date: {
                type: Date,
            }
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);