const express=require("express");
const {connection}=require("./configs/db")
const app=express();
const bodyParser=require("body-parser");
const {staffRouter}=require("./routes/staff.routes");
const { rightsRouter } = require("./routes/rights.routes");

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use("/staff",staffRouter);

app.use("/rights",rightsRouter);


app.listen(process.env.port,async(req,res)=>{
    try{
      await connection;
      console.log(`The server is running at ${process.env.port}`);
    }
    catch(err){
        res.send(err.message);
    }
})