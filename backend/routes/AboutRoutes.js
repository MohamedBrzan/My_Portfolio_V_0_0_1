const express = require('express');
const {
  getAbout,
  createAbout,
  updateAbout,
  addAboutServices,
  deleteService,
  SetAllServices,
  deleteAllServices,
  updateService,
} = require('../controllers/AboutControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get About & Create New About & Update About

router
  .route('/')
  .get(getAbout)
  .post(Authentication, createAbout)
  .put(Authentication, updateAbout);

// Add About Services & Delete Service & Set All Services & Delete All Services

router
  .route('/:id')
  .post(Authentication, addAboutServices)
  .put(Authentication, SetAllServices)
  .delete(Authentication, deleteAllServices);

// Update Service & Delete Service

router
  .route('/:id/:serviceId')
  .put(Authentication, updateService)
  .delete(Authentication, deleteService);

module.exports = router;
