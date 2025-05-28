const mongoose = require('mongoose');

const leaderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  achievements: [{
    type: String
  }],
  tenure: {
    start: Date,
    end: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Leader', leaderSchema); 