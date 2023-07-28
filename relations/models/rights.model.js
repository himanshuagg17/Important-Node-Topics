const mongoose=require("mongoose");


// yaha par humne ek rightsSchema liya hai jisme hum staff_id ki ek field banayenge, is field me hum staff ki object id ko reference karenge(link karenge)
const rightsSchema=new mongoose.Schema({
    task:{type:String,required:true},
    staff_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'staff'
    }
},
{
    timestamps:true
})

const RightsModel=mongoose.model("right",rightsSchema);

module.exports={
    RightsModel
}