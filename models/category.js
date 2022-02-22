//ADEL
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 20,
        trim:true
    },
    description: {
        type: String
        // , required: true,
        // min: 50,,
        , max: 1000
    },
    image: String
});


module.exports = mongoose.model("category", categorySchema);