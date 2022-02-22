//KAMAL
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        customer: { type: mongoose.Types.ObjectId, ref: "customer" },
        cartItems: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product",
                    required: true,
                },
                quantity: { type: Number, dafault: 1 },
            },
        ],
    },
    { timeStamps: true }
);

module.exports = mongoose.model("cart", cartSchema);