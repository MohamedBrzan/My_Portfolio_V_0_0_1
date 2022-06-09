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
  getProgrammingExperienceById,
  getOtherExperienceById,
} = require('../controllers/ExperienceControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get Experience & Create New Experience

router.route('/').get(getExperience).post(Authentication, createExperience);

// Update Experience Titles

router.route('/:id').put(Authentication, updateExperienceTitles);

// Add Programming Experience

router
  .route('/:id/programming')
  .post(Authentication, createProgrammingExperience);

// Update & Delete Programming Experience & Get Experience By Id

router
  .route('/:id/programming/:experienceId')
  .get(getProgrammingExperienceById)
  .put(Authentication, updateProgrammingExperience)
  .delete(Authentication, deleteProgrammingExperience);

// Add Other Experience

router.route('/:id/other').post(Authentication, createOtherExperience);

// Update & Delete Other Experience & Get Experience By Id

router
  .route('/:id/other/:experienceId')
  .get(getOtherExperienceById)
  .put(Authentication, updateOtherExperience)
  .delete(Authentication, deleteOtherExperience);

// Add Experience & Update Experience & Delete Experience

module.exports = router;
