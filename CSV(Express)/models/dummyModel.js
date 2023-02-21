
const  mongoose=require('mongoose');
var dummySchema=new mongoose.Schema({
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


module.exports=mongoose.model("User",dummySchema);