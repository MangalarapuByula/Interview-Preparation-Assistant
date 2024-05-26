const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  position: { type: String, required: true },
  date: { type: Date, required: true },
  questions: [{ type: String }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;
