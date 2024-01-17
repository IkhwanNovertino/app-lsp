const mongoose = require('mongoose');

let forumSchema = mongoose.Schema({
  name: {
    type: String,
  },
  question: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Forum', forumSchema);