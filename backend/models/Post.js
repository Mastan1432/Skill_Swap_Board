const mongoose=require("mongoose");

const PostSchema=new mongoose.Schema({
    name:{type:String,required:true},
    teach:{type:String,required:true},
    learn:{type:String,required:true},
    mobile:{type:String,required:true,unique:true},
    createdAt:{type:Date,default:Date.now},
});

module.exports=mongoose.model("Post",PostSchema);