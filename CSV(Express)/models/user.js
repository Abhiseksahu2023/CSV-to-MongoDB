const  mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
   name:{
       type:String
   },
   mobile:{
    type:Number
},
   email:{
       type:String
   },
   
});


module.exports=mongoose.model("User",userSchema);