const Portfolio = require('../models/Portfolio');
const AsyncHandler = require('../middleWares/AsyncHandler');
const ErrorHandler = require('../middleWares/ErrorHandler');

// Get Portfolio
exports.getPortfolio = AsyncHandler(async (req, res, next) => {
  const portfolio = await Portfolio.find();
  res.status(200).json(portfolio);
});

// Get Portfolio by ID
exports.getPortfolioById = AsyncHandler(async (req, res, next) => {
  const portfolio = await Portfolio.findById(req.params.id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  res.status(200).json(portfolio);
});

// Create Portfolio
exports.createPortfolio = AsyncHandler(async (req, res, next) => {
  const { img, title, description, link } = req.body;
  const portfolio = await Portfolio.create({ img, title, description, link });
  res.status(201).json(portfolio);
});

// Update Portfolio
exports.updatePortfolio = AsyncHandler(async (req, res, next) => {
  let portfolio = await Portfolio.findById(req.params.id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(portfolio);
});

// Delete Portfolio
exports.deletePortfolio = AsyncHandler(async (req, res, next) => {
  let portfolio = await Portfolio.findById(req.params.id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  portfolio = await Portfolio.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: 'Portfolio Deleted' });
});
