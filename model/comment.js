const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  answer: {
    type: String,
  },
  question: {
    type: mongoose.Schema.ObjectId,
    ref: 'Forum',
  }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);