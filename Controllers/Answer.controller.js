const authroute = require('express').Router();
const answerModel = require('../models/Answers.model');
const mongoose = require("../models/Answers.model")


authroute.post("/answer", async function (req, res, next) {
  const {question_id,answer,user}=req.body;
  const newAnswer = new answerModel({
    question_id,
    answer,
    user
  })
  
  try {
      const response = await newAnswer.save();
      if (response?._id) {
          return res.status(200).json({
              success: true,
              message: 'Answer created successfully',
              data: response,
          })
      }
      else {
          return res.status(500).json({
              success: false,
              message: 'Answer creation failed'
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
