const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "customer",
            required: true,
        },
        shippingAddress: {
            country:{type:string,required: true },
            city:{type:String,required: true},
            street:{type:String,required: true},
            building:{type:String,required: true},

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
        {   
            type: {
                type: String,
                enum: ["pending", "packed", "shipped", "delivered", "cancelled"],
                default: "pending",
            },
            date: {
                type: Date,
            }
        },
        totalPrice: {
            type: Number,
            required: true,
          }, 
        paymentStatus: {
            type: String,
            enum: ["pending", "completed", "cancelled", "refund"],
            required: true,
          },
    },
 

    { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
