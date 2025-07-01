const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['upcoming', 'attending', 'maybe', 'declined'],
    default: 'upcoming',
  },
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);