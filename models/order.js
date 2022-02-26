const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        customerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        customerName:{
            type:String,
            required:true,
        },
        phoneNumber:{
            type:Number,
            required:true,
        }
        ,
        shippingAddress: {
            country:{
                type:string,
                required: true 
            },
            city:{
                type:String,
                required: true
            },
           
            street:{
                type:String,
                required: true
            },
            postalCode:{ 
                type: String, required: true 
            },
            building:{
                type:String,
                required: true
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
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
            },
        ],
        orderDate: {
            type: Date,
        },
        orderStatus:
        {               
          type: String,
           enum: ["pending", "packed", "shipped", "delivered", "cancelled"],
            default: "pending",
   
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
          },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0.0,
          }, 
        paymentStatus: {
            type: String,
            enum: ["pending", "completed", "cancelled", "refund"],
            required: true,
          },
        paymentType:{
            type:String,
            enum:["cod", "card"],
            required: true,
        }  
    },
 

    { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);