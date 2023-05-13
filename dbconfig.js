
const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://pramilaworld:QY4jU4jBndhXOl6v@cluster0.t6vi0zb.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>{console.log("mongo connected")})
.catch((err)=>{console.log(err)})