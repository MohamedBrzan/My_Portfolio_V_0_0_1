const express = require('express');
const {
  getExperience,
  createExperience,
  addExperience,
  SetAllExperience,
  updateOneExperience,
} = require('../controllers/ExperienceControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get Experience & Create New Experience

router.route('/').get(getExperience).post(Authentication, createExperience);

// Add Experience & Update And Set All Experience

router
  .route('/:id')
  .post(Authentication, addExperience)
  .put(Authentication, SetAllExperience);

// Update One Experience

router.route('/:id/:experienceId').put(Authentication, updateOneExperience);

module.exports = router;
