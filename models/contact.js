const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String},
    Number:{type:String,required:true},
    query:{type:String,required:true}
  // Define your fields here

});

const contactModel = mongoose.model('contactModel', contactSchema);

module.exports = contactModel;