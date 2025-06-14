const Post = require("../models/Post");

const express=require("express");
const router=express.Router();


router.post("/",async (req,res)=>{
    const {name,teach,learn,mobile}=req.body;

    try{
        const post=new Post({name,teach,learn,mobile});
        await post.save();
        res.status(201).json(post);
    }
    catch(err){
        res.status(500).json({error:err.message}); 
    }
});

router.get("/",async (req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
})

module.exports=router;