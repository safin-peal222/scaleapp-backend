const galleryDB = require('../models/Gallery');
const fs = require('fs');

exports.store=async(req,res)=>{
    const image =req.files.file;
    const imageName=Date.now()+'-'+image.name;
    image.mv(`${process.cwd()}/public/gallery/${imageName}`);
    const result = new galleryDB({imageUrl:imageName});
    await result.save().then(response=>{
        res.send({response,status:200});
    })
    .catch(err=>{
        res.send(err);
    })
}


exports.delete=async(req,res)=>{
    const id = req.body.image._id;
    const name = req.body.image.imageUrl;
    await galleryDB.deleteOne({_id:id}).then(response=>{
        fs.unlink('public/gallery/'+name,err=>{
            if(err)
              res.send('not found')
            else
              res.send({response,status:200});
        });
    })
    
}


exports.get=async(req,res)=>{
    await galleryDB.find().then(response=>{
        res.send(response);
    });
}