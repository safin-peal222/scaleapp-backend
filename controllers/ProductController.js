const productDB = require('../models/Products');
const fs = require('fs'); 

exports.uploadProduct = async(req,res)=>{
    const image = req.files.file;
    const pdf = req.files.pdf;
   
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

    const pdfName = Date.now()+'_'+pdf.name;
    pdf.mv(`${process.cwd()}/public/pdf/${pdfName}`);
    
    const data = {
        name : req.body.name,
        category : req.body.cat,
        madeIn : req.body.madeIn,
        top:req.body.top,
        image : imageName,
        pdf: pdfName,
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

exports.delete=async(req,res)=>{
    const id = req.body.product._id;
    const pdf = req.body.product.pdf;
    const imageName = req.body.product.image;
    const othernames = req.body.product.othernames;
    const arr = othernames.split(',');
    await productDB.deleteOne({_id:id}).then(response=>{
        fs.unlink('public/pdf/'+pdf,err=>{
            //res.send(err);
        });
        fs.unlink('public/images/'+imageName,err=>{
            //res.send(err);
        });
        arr.map(image=>{
            fs.unlink('public/images/'+image,err=>{
                //res.send(err);
            });
        })
        res.send(response);
    })
}
exports.update=async(req,res)=>{}