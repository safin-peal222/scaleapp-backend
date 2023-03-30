const carouselDB = require('../models/Carousel');
const fs = require('fs');

exports.store=async(req,res)=>{
    const image = req.files.file;
    const imageName = Date.now()+'_'+image.name;
    image.mv(`${process.cwd()}/public/CarouselImage/${imageName}`);

    const result = new carouselDB({imageUrl:imageName});
    await result.save().then(response=>{
        res.send({response,status:200});
    })
    //res.send(imageName);
}


exports.delete=async(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    await carouselDB.deleteOne({_id:id}).then(response=>{
        fs.unlink('public/CarouselImage/'+name,err=>{
            if(err)
              res.send('not found')
            else
              res.send({response,status:200});
        });
    })
}


exports.get=async(req,res)=>{
    await carouselDB.find().then(response=>{
        res.send(response);
    });
}