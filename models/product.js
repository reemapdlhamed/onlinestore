//HASSAN

const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true ,trim:true},
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    seller_id: { type: mongoose.Types.ObjectId, required: true, ref: "seller" },
    category_id: { type: mongoose.Types.ObjectId, required: true, ref: "category" },
    discount: { type: Number, required: false },
    reviews: [{
        user_id:{type:mongoose.Types.ObjectId,required:true,ref:"user"},
        title:{type:String,required:true},
        description:{type:String,required:true},
        rating:{type:Number}
    }],
    description: { type: String, required: false },
    images:[String],
    properties: { type: Subdocument, required: false }
})


module.exports = mongoose.model("product", productSchema);