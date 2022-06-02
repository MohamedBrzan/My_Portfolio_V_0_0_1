const express = require('express');
const {
  getHomeView,
  createNewHomeView,
  addFrontendImages,
  deleteFrontendImage,
  addBackendImages,
  deleteBackendImage,
} = require('../controllers/HomeViewControllers');
const router = express.Router();

// Get HomeView & Create New HomeView

router.route('/').get(getHomeView).post(createNewHomeView);

// Add Frontend Images & Delete Frontend Image

router
  .route('/frontend/:id')
  .post(addFrontendImages)
  .delete(deleteFrontendImage);

// Add Backend Images & Delete Backend Image

router.route('/backend/:id').post(addBackendImages).delete(deleteBackendImage);

module.exports = router;
