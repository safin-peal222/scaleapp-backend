const employeeDB = require('../models/Employee');
const fs = require('fs');


exports.get=async(req,res)=>{
    await employeeDB.find().then(response=>{
        res.send(response);
    })
}

exports.store=async(req,res)=>{
    const image = req.files.file;
    const imageName = Date.now()+'_'+image.name;
    image.mv(`${process.cwd()}/public/employee/${imageName}`);
    const result = new employeeDB({name:req.body.name,phone:req.body.phone, designation:req.body.designation,image:imageName});
    await result.save().then(response=>{
        res.send({response,status:200});
    })
    
}

exports.delete=async(req,res)=>{
    const id = req.body.id;
    const imageName = req.body.image;
       await employeeDB.deleteOne({_id:id}).then(response=>{
        fs.unlink('public/employee/'+imageName,err=>{
            if(err)
              res.send(err);
            else
              res.send({status:200});
        });
    })
}