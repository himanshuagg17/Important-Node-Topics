// const {RightsModel}=require("../models/rights.model");

// module.exports={
//     create: async(req,res)=>{
//     const right=await RightsModel.create({
//             staff_id:req.body.staff_id,
//             right:req.body.right
//         })

//         const rightData=await right.save();

//         return res.send(rightData);
//     }
// }