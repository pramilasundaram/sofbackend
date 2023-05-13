const express=require('express');
const nodeserver=express();
const PORT=9000;
const HOST="localhost";

//middleware configure

//inject node application
nodeserver.use("/",require("./App"));


nodeserver.listen(PORT,HOST,()=>{
    require("./dbconfig")
    // console.log("server started")
})
module.exports=nodeserver;