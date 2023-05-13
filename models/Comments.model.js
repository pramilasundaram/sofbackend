const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  answer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer",
  },
  comment: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("Comments", CommentSchema);
