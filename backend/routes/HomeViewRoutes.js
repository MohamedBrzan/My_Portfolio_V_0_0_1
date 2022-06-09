const express = require('express');
const {
  getHomeView,
  createNewHomeView,
  addFrontendImages,
  deleteFrontendImage,
  addBackendImages,
  deleteBackendImage,
  updateBackendImages,
  updateFrontendImages,
  getFrontendImage,
  getBackendImage,
  getHomeViewById,
  updateHomeView,
} = require('../controllers/HomeViewControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get HomeView & Create New HomeView

router.route('/').get(getHomeView).post(Authentication, createNewHomeView);

// Get HomeView By Id

router.route('/:id').get(getHomeViewById).put(Authentication, updateHomeView);

// Add Frontend Images & Delete Frontend Image

router.route('/frontend/:id').post(Authentication, addFrontendImages);

// Add Backend Images & Delete Backend Image

router.route('/backend/:id').post(Authentication, addBackendImages);

// Update Frontend Images & Delete Frontend Image

router
  .route('/:id/frontend/:imageId')
  .get(getFrontendImage)
  .put(updateFrontendImages)
  .delete(Authentication, deleteFrontendImage);

// Update Backend Images & Delete Backend Image

router
  .route('/:id/backend/:imageId')
  .get(getBackendImage)
  .put(Authentication, updateBackendImages)
  .delete(Authentication, deleteBackendImage);

module.exports = router;
