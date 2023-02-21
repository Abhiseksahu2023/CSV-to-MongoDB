const User=require('../models/user')
// const path=require('path')
var csv=require("csvtojson");
const user = require('../models/user');


const importuser=async(req,res)=>{
    
    try {
        var userData=[];

        console.log(req.file.path)
        csv().fromFile(req.file.path).then(async(response)=>{
     for(var x=0;x<response.length;x++){
        userData.push({
            name:response[x].Name,
            mobile:response[x].Phone,
            email:response[x].Email 
        });


     }
     const usersssss=await user.insertMany(userData);
     console.log(usersssss);
        })
        res.send({status:200,success:true,msg:"runnning .message"})
        
    } catch (error) {
        res.send({status:400,success:false,msg:error.message})
    }
}
module.exports={
    importuser
}