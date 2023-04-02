const jwt = require('jsonwebtoken');
const checkAuthentication=(req,res,next)=>{
 const key = process.env.JWT_SECRET;
 const token = req.body.token;
 jwt.verify(token,key,(err,decoded)=>{
    if(err)
    {
        res.send({status:0,msg:"Authentication Failed"});
    }
    else
    {
        //console.log(decoded);
        next();
    }
 })
}

module.exports={checkAuthentication};