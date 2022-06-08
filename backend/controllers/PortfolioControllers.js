const Portfolio = require('../models/Portfolio');
const AsyncHandler = require('../middleWares/AsyncHandler');
const ErrorHandler = require('../middleWares/ErrorHandler');

// Get Portfolio
exports.getPortfolio = AsyncHandler(async (req, res, next) => {
  const portfolio = await Portfolio.find();
  res.status(200).json(portfolio);
});

// Create Portfolio
exports.createPortfolio = AsyncHandler(async (req, res, next) => {
  const portfolio = await Portfolio.create(req.body);
  res.status(201).json(portfolio);
});

// Update Portfolio Title
exports.updatePortfolioTitle = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  let portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(new ErrorHandler(404, `Portfolio with id ${id} not found`));

  portfolio = await Portfolio.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(portfolio);
});

// Get Frontend Project by ID
exports.getFrontendProjectById = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.frontend.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    res.status(200).json(findProject);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});

// Get Backend Project by ID
exports.getBackendProjectById = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.backend.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    res.status(200).json(findProject);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});

// Get FullStack Project by ID
exports.getFullStackProjectById = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.fullStack.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    res.status(200).json(findProject);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});

// Create Frontend Project
exports.createFrontendProject = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image, title, description, link } = req.body;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(new ErrorHandler(404, `Portfolio with id ${id} not found`));

  portfolio.frontend.projects.push({ image, title, description, link });

  await portfolio.save();

  res.status(200).json(portfolio.frontend.projects);
});

// Create Backend Project
exports.createBackendProject = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image, title, description, link } = req.body;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(new ErrorHandler(404, `Portfolio with id ${id} not found`));

  portfolio.backend.projects.push({ image, title, description, link });

  await portfolio.save();

  res.status(200).json(portfolio.backend.projects);
});

// Create FullStack Project
exports.createFullStackProject = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image, title, description, link } = req.body;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(new ErrorHandler(404, `Portfolio with id ${id} not found`));

  portfolio.fullStack.projects.push({ image, title, description, link });

  await portfolio.save();

  res.status(200).json(portfolio.fullStack.projects);
});

// Update Frontend Project
exports.updateFrontendProject = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;
  const { image, title, description, link } = req.body;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.frontend.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    findProject.image = image;
    findProject.title = title;
    findProject.description = description;
    findProject.link = link;
    await portfolio.save();

    res.status(200).json(findProject);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});

// Update Backend Project
exports.updateBackendProject = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;
  const { image, title, description, link } = req.body;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.backend.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    findProject.image = image;
    findProject.title = title;
    findProject.description = description;
    findProject.link = link;
    await portfolio.save();

    res.status(200).json(findProject);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});

// Update FullStack Project
exports.updateFullStackProject = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;
  const { image, title, description, link } = req.body;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.fullStack.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    findProject.image = image;
    findProject.title = title;
    findProject.description = description;
    findProject.link = link;
    await portfolio.save();

    res.status(200).json(findProject);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});

// Delete Frontend Project
exports.deleteFrontendProject = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.frontend.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    portfolio.frontend.projects.pull(projectId);
    await portfolio.save();

    res.status(200).json(portfolio.frontend);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});

// Delete Backend Project
exports.deleteBackendProject = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.backend.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    portfolio.backend.projects.pull(projectId);
    await portfolio.save();

    res.status(200).json(portfolio.backend);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});

// Delete FullStack Project
exports.deleteFullStackProject = AsyncHandler(async (req, res, next) => {
  const { id, projectId } = req.params;

  const portfolio = await Portfolio.findById(id);

  if (!portfolio)
    return next(
      new ErrorHandler(404, `Portfolio with id ${req.params.id} not found`)
    );

  const findProject = portfolio.fullStack.projects.find(
    (project) => project._id.toString() === projectId
  );

  if (findProject) {
    portfolio.fullStack.projects.pull(projectId);
    await portfolio.save();

    res.status(200).json(portfolio.fullStack);
  } else {
    next(new ErrorHandler(404, `Project with id ${projectId} not found`));
  }
});
