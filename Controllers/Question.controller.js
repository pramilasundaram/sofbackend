const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const questionModel = require("../models/Question.model");

router.post("/question", async function (req, res, next) {
  const {title,body,tags,created_at,user,comment_id,}=req.body;
  const newQuestion = new questionModel({
    title,
    body,
    tags,
    created_at,
    user,
    comment_id,
  })
  
  try {
      const response = await newQuestion.save();
      if (response?._id) {
          return res.status(200).json({
              success: true,
              message: 'Question created successfully',
              data: response,
          })
      }
      else {
          return res.status(500).json({
              success: false,
              message: 'Question creation failed'
          })
      } 
  } catch (error) {
      return res.status(400).json({
          success: false,
          message:"Question not added successfully",
          error:error.message,
      }) 
  }
  
})

router.get("/getquestions", async function (req, res, next) {
  const {title,body,tags,created_at,user,comment_id,}=req.body;
  const newQuestion = new questionModel({
    title,
    body,
    tags,
    created_at,
    user,
    comment_id,
  })
  const questions = await questionModel.find();  
    res.status(200).json({
        message: 'fetched all users',
        data:questions
    })
})
module.exports = router;
