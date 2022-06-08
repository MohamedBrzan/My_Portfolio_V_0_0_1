const express = require('express');
const {
  getPortfolio,
  createPortfolio,
  getFrontendProjectById,
  updateFrontendProject,
  deleteFrontendProject,
  getBackendProjectById,
  updateBackendProject,
  deleteBackendProject,
  getFullStackProjectById,
  updateFullStackProject,
  deleteFullStackProject,
  updatePortfolioTitle,
  createFrontendProject,
  createBackendProject,
  createFullStackProject,
} = require('../controllers/PortfolioControllers');
const router = express.Router();

// Get Portfolio & create Portfolio

router
  .route('/')
  .get(getPortfolio)
  .post(createPortfolio)
  .put(updatePortfolioTitle);

// Create Frontend Project

router.route('/:id/frontend').post(createFrontendProject);

// Find Frontend Project by ID & Update Frontend Project & Delete Frontend Project

router
  .route('/:id/frontend/:projectId')
  .get(getFrontendProjectById)
  .put(updateFrontendProject)
  .delete(deleteFrontendProject);

// Create Backend Project

router.route('/:id/backend').post(createBackendProject);

// Find Backend Project by ID & Update Backend Project & Delete Backend Project

router
  .route('/:id/backend/:projectId')
  .get(getBackendProjectById)
  .put(updateBackendProject)
  .delete(deleteBackendProject);

// Create FullStack Project

router.route('/:id/fullStack').post(createFullStackProject);

// Find FullStack Project by ID & Update FullStack Project & Delete FullStack Project

router
  .route('/:id/fullStack/:projectId')
  .get(getFullStackProjectById)
  .put(updateFullStackProject)
  .delete(deleteFullStackProject);

module.exports = router;
