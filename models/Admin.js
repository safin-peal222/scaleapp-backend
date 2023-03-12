const mongoose = require('mongoose');

const Admin = mongoose.Schema({
    email:{
        type:String,
        required: true,
        trim: true,
        lowercase: true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

const AdminTable = mongoose.model('Admin',Admin);
module.exports= AdminTable;