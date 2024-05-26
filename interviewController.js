const Interview = require('../models/Interview');

// Get all interviews
const getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({ userId: req.user._id });
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new interview
const createInterview = async (req, res) => {
  try {
    const { companyName, position, date, questions } = req.body;
    const newInterview = new Interview({
      companyName,
      position,
      date,
      questions,
      userId: req.user._id,
    });

    const savedInterview = await newInterview.save();
    res.status(201).json(savedInterview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getInterviews, createInterview };
