const authroute = require('express').Router();
const userModel = require('../models/user.model');
const mongoose = require("../models/user.model")

/*
METHOD:GET
path:/getAllUsers
*/
authroute.get("/getAllUsers", async function (req, res, next) {
    const {userName,contactDetails,address,generalDetails}=req.body;
    const newUser = new userModel({
        userName,
        contactDetails,
        address ,
        generalDetails,
    })    
    const users = await userModel.find();  
    res.status(200).json({
        message: 'fetched all users',
        data:users
    })
})

/*
METHOD:POST
path:/CreateUser
*/
authroute.post("/createUser", async function (req, res, next) {
    const {userName,contactDetails,address,generalDetails}=req.body;
    const newUser = new userModel({
        userName,
        contactDetails,
        address ,
        generalDetails,
    })
    
    try {
        const response = await newUser.save();
        if (response?._id) {
            return res.status(200).json({
                success: true,
                message: 'Account created successfully',
                data: response,
            })
        }
        else {
            return res.status(500).json({
                success: false,
                message: 'Account creation failed'
            })
        } 
    } catch (error) {
        return res.status(400).json({
            success: false,
            message:'Bad request',
            error:error.message,
        }) 
    }
    
})

module.exports = authroute;