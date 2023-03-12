const productDB = require('../models/Products');


exports.uploadProduct = async(req,res)=>{
    const image = req.files.file;
    var othernames ='';
    for(let i=0;i<req.body.size;i++)
    {
        const img = req.files[`file-${i}`];
        const image = img.name;
        const finalName = Date.now()+'-'+image;
        img.mv(`${process.cwd()}/public/images/${finalName}`);
        //console.log(finalName);
        if(i==0)
            othernames = othernames+finalName;
        else
            othernames = othernames+','+finalName;
    }
    
    const imageName=Date.now()+'-'+image.name;
    //console.log(imageName);
    image.mv(`${process.cwd()}/public/images/${imageName}`);
    
    const data = {
        name : req.body.name,
        category : req.body.cat,
        image : imageName,
        othernames
    }
    const result = new productDB(data);
    await result.save().then(response=>{
        res.send(response);
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.getProducts =async(req,res)=>{
    await productDB.find().then(response=>{
        res.send(response);
    })
}

exports.details = async(req,res)=>{
    const id = req.body.id;
    const details = await productDB.findById(id).exec();
    res.send(details);
}