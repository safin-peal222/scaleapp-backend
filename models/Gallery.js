const mongoose = require('mongoose');

const Gallery = mongoose.Schema({
    imageUrl:{
        type:String,
        required: true,
        trim: true,
        lowercase: true
    },
})

const GalleryTable = mongoose.model('Gallery',Gallery);
module.exports= GalleryTable;