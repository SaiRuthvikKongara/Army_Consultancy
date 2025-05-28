const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Gallantry', 'Distinguished Service', 'Honorary', 'Battle Honour'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  recipients: [{
    name: String,
    rank: String,
    unit: String,
    date: Date,
    citation: String
  }],
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Award', awardSchema); 