const express = require('express');
const {
  getExperience,
  createExperience,
  addExperience,
  updateOneExperience,
  deleteExperience,
  updateExperience,
} = require('../controllers/ExperienceControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get Experience & Create New Experience

router.route('/').get(getExperience).post(createExperience);

// Update Experience

router.route('/:id').put(updateExperience);

// Add Experience & Update Experience & Delete Experience

router
  .route('/:id/experience')
  .post(addExperience)
  .put(updateOneExperience)
  .delete(deleteExperience);

module.exports = router;
