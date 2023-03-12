const mongoose = require('mongoose');
require('dotenv').config();
const username ='nodereact1';
const password ='pass1234';
//console.log(username);
const url = `mongodb+srv://${username}:${password}@cluster0.shiwe.mongodb.net/?retryWrites=true&w=majority`;
//const client = new MongoClient(url);

const connectDB=async()=>{
    try {
        await mongoose.connect(url);
        console.log("success");
    } catch (error) 
    {
      console.log(error);
    }
}


module.exports={connectDB};