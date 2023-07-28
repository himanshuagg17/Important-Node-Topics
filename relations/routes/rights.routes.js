const express=require("express");
const rightsRouter=express.Router();
rightsRouter.use(express.json());
const {RightsModel}=require("../models/rights.model");


rightsRouter.post("/create",async(req,res)=>{
    const rightData=req.body;
    const right=await RightsModel(rightData);
    await right.save();
    res.send("the right data has been saved");
})


rightsRouter.get("/",async(req,res)=>{
   
    const rights=await RightsModel.find({_id:req.body.right_id}).populate("staff_id");
    res.send(rights);
})

module.exports={
    rightsRouter
}