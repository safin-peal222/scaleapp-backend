const mongoose = require('mongoose');

const Carousel = mongoose.Schema({
    imageUrl:{
        type:String,
        required: true,
        trim: true,
        lowercase: true
    },
})

const CarouselTable = mongoose.model('Carousel',Carousel);
module.exports= CarouselTable;