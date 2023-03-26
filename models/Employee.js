const mongoose = require('mongoose');

const Employee = mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    phone:{
        type:Number,
        required: true,
        trim: true
    },
    designation:{
        type:String,
        required: true,
        trim: true
    },
    image:{
        type:String,
        trim: true
    }
})

const EmployeeTable = mongoose.model('Employee', Employee);
module.exports= EmployeeTable;