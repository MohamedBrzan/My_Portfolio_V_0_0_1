const express = require('express');
const {
  getPortfolio,
  createPortfolio,
  getPortfolioById,
  updatePortfolio,
  deletePortfolio,
} = require('../controllers/PortfolioControllers');
const router = express.Router();

// Get Portfolio & create Portfolio

router.route('/').get(getPortfolio).post(createPortfolio);

// Find Portfolio by ID & Update Portfolio & Delete Portfolio

router
  .route('/:id')
  .get(getPortfolioById)
  .put(updatePortfolio)
  .delete(deletePortfolio);

module.exports = router;
