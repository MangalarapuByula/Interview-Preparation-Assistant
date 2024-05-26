const express = require('express');
const { getInterviews, createInterview } = require('../controllers/interviewController');
const router = express.Router();

router.route('/')
  .get(getInterviews)
  .post(createInterview);

module.exports = router;
