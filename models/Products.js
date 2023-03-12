const mongoose = require("mongoose");

const allProduct= mongoose.Schema({
    name:{
        type : String,
        required: true,
        trim: true,
        lowercase: true
    },
    category:{
        type : String,
        required: true,
        trim: true
    },
    image:{
        type: String,
        required: true,
    },
    othernames:{
        type: String,
    },
})
const Products = mongoose.model("Products", allProduct);
module.exports= Products;