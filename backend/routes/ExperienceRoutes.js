const express = require('express');
const {
  getExperience,
  updateProgrammingExperience,
  createProgrammingExperience,
  createOtherExperience,
  updateOtherExperience,
  deleteProgrammingExperience,
  deleteOtherExperience,
  createExperience,
  updateExperienceTitles,
} = require('../controllers/ExperienceControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get Experience & Create New Experience

router.route('/').get(getExperience).post(createExperience);

// Update Experience Titles

router.route('/:id').put(updateExperienceTitles);

// Add Programming Experience

router.route('/:id/programming').post(createProgrammingExperience);

// Update & Delete Programming Experience

router
  .route('/:id/programming/:experienceId')
  .put(updateProgrammingExperience)
  .delete(deleteProgrammingExperience);

// Add Other Experience

router.route('/:id/other').post(createOtherExperience);

// Update & Delete Other Experience

router
  .route('/:id/other/:experienceId')
  .put(updateOtherExperience)
  .delete(deleteOtherExperience);

// Add Experience & Update Experience & Delete Experience

module.exports = router;
