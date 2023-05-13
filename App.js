const express=require('express');
const bodyparser=require('body-parser')
const appserver=express();

//injecting middleware
appserver.use(bodyparser.json())
appserver.use(bodyparser.urlencoded({extended:true}))


// injecting  controllers
appserver.use("/auth",require('./Controllers/user.controller'))
appserver.use("/auth",require('./Controllers/Question.controller'))
appserver.use("/auth",require('./Controllers/Answer.controller'))
appserver.use("/auth",require('./Controllers/Comments.controller'))


module.exports=appserver;