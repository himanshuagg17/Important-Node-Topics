const {StaffModel} =require("../models/staff.model")

module.exports={
    create: async(req,res)=>{

        const {name,email}=req.body;
        const staff=await StaffModel.create({
            name,
            email
        })

        return res.send(staff);
    }
}