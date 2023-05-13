const authroute = require('express').Router();
const commentModel = require('../models/Comments.model');
const mongoose = require("../models/Comments.model")


authroute.post("/addcomment", async function (req, res, next) {
  const {question_id,answer_id,comment,created_at,user}=req.body;
  const newComment = new commentModel({ 
    question_id,  
    answer_id,
    comment,
    created_at,
    user
  })
  
  try {
      const response = await newComment.save();
      if (response?._id) {
          return res.status(200).json({
              success: true,
              message: 'Comment created successfully',
              data: response,
          })
      }
      else {
          return res.status(500).json({
              success: false,
              message: 'comment creation failed'
          })
      } 
  } catch (error) {
      return res.status(400).json({
          success: false,
          message:'Comment not added',
          error:error.message,
      }) 
  }  
})
module.exports = authroute;