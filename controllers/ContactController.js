const ContactUser = require('../models/contact');
const { modelName } = require('../models/Products');
const contactController={
    createContact: async(req,res)=>{
        console.log(req.body)
        try{
            const newUser= await ContactUser.create(req.body);
            res.send(newUser)
        }
        catch(err){
            res.send({err})

        }
    },
    getContact : async(req,res)=>{

        try{
            const getUser= await ContactUser.find({});
            res.send(getUser);
        }
        catch(err){
            res.send(err);
        }
    },
    deleteContact: async(req,res)=>{
        
    const findUser=await ContactUser.find({_id:req.body.id});
    console.log(findUser);

    ContactUser.deleteOne({ _id: req.body.id }, (err) => {
        if (err) {
          console.error(err);
        } else {
          res.send("document deleted");
        }
      });
           
    

    }
}


module.exports=contactController;



  