const express=require("express");
const staffRouter=express.Router();
const {StaffModel}=require("../models/staff.model");


staffRouter.post("/create",async(req,res)=>{
    const staffData=req.body;
    const staff=await StaffModel(staffData);
    await staff.save();
    res.send("The staff data has been saved");
})


module.exports={
    staffRouter
}