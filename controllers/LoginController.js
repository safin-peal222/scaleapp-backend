const jwt = require('jsonwebtoken');
require('dotenv').config();
const Admin = require('../models/Admin');
const key = process.env.JWT_secret;
exports.login=async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const admin =await Admin.findOne({email,password}).exec();
    if(admin)
    {
        //console.log(key);
        const token = jwt.sign({id:admin._id,email:admin.email},key);
        res.send({token,user:{id:admin._id,email:admin.email}});
    }
    else
    {
        res.send('not found');
    }
}

exports.check = async(req,res)=>{
    const token = req.body.token;
    jwt.verify(token,key,(err,decoded)=>{
        if(err){ 
            res.send('not valid');
        }
        else{ 
            res.send(decoded)
        }
    })
}
