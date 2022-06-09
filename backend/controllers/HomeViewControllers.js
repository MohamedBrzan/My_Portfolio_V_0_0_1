const AsyncHandler = require('../middleWares/AsyncHandler');
const ErrorHandler = require('../middleWares/ErrorHandler');
const HomeView = require('../models/HomeView');

// Get HomeView
exports.getHomeView = AsyncHandler(async (req, res, next) => {
  const homeView = await HomeView.find();

  res.status(200).json(homeView);
});

// Create A New HomeView
exports.createNewHomeView = AsyncHandler(async (req, res, next) => {
  const { description, frontendImages, backendImages } = req.body;

  const title = {
    firstPart: req.body.title.firstPart,
    coloredPart: req.body.title.coloredPart,
    lastPart: req.body.title.lastPart,
  };

  const homeView = await HomeView.create({
    title,
    description,
    frontendImages,
    backendImages,
  });

  res.status(201).json(homeView);
});

// Get HomeView By Id
exports.getHomeViewById = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const homeView = await HomeView.findById(id);

  res.status(200).json(homeView);
});

// Update HomeView
exports.updateHomeView = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { description } = req.body;

  const title = {
    firstPart: req.body.title.firstPart,
    coloredPart: req.body.title.coloredPart,
    lastPart: req.body.title.lastPart,
  };

  const homeView = await HomeView.findByIdAndUpdate(
    id,
    {
      title,
      description,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(homeView);
});

//Add Frontend Images
exports.addFrontendImages = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image, title } = req.body;

  let homeView = await HomeView.findById(id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  const findTitle = homeView.frontendImages.find((t) => t.title === title);

  if (findTitle) {
    return next(new ErrorHandler(400, 'Title already exists'));
  } else {
    homeView.frontendImages.push({ title, image });

    await homeView.save();

    res.status(200).json(homeView);
  }
});

//Get Frontend Image
exports.getFrontendImage = AsyncHandler(async (req, res, next) => {
  const { id, imageId } = req.params;

  const homeView = await HomeView.findById(id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  let findImage = homeView.frontendImages.find(
    (input) => input._id.toString() === imageId.toString()
  );

  if (findImage) {
    return res.status(201).json(findImage);
  } else {
    return next(new ErrorHandler(404, 'Image not found'));
  }
});

//Update Frontend Images
exports.updateFrontendImages = AsyncHandler(async (req, res, next) => {
  const { id, imageId } = req.params;
  const { image, title } = req.body;

  const homeView = await HomeView.findById(id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  let findImage = homeView.frontendImages.find(
    (input) => input._id.toString() === imageId.toString()
  );

  if (findImage) {
    findImage.image = image;
    findImage.title = title;

    await homeView.save();
    return res.status(201).json(homeView);
  } else {
    return next(new ErrorHandler(404, 'Image not found'));
  }
});

// Delete Frontend Image
exports.deleteFrontendImage = AsyncHandler(async (req, res, next) => {
  const { id, imageId } = req.params;

  let homeView = await HomeView.findById(id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  const findImage = homeView.frontendImages.find(
    (input) => input._id.toString() === imageId.toString()
  );

  if (findImage) {
    homeView.frontendImages.pull(imageId);

    await homeView.save();

    return res.status(201).json(homeView);
  } else {
    return next(new ErrorHandler(404, 'Image not found'));
  }
});

//Add Backend Images
exports.addBackendImages = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image, title } = req.body;

  let homeView = await HomeView.findById(id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  const findTitle = homeView.backendImages.find((t) => t.title === title);

  if (findTitle) {
    return next(new ErrorHandler(400, 'Title already exists'));
  } else {
    homeView.backendImages.push({ title, image });

    await homeView.save();

    res.status(200).json(homeView);
  }
});

//Get Backend Image
exports.getBackendImage = AsyncHandler(async (req, res, next) => {
  const { id, imageId } = req.params;

  const homeView = await HomeView.findById(id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  let findImage = homeView.backendImages.find(
    (input) => input._id.toString() === imageId.toString()
  );

  if (findImage) {
    return res.status(201).json(findImage);
  } else {
    return next(new ErrorHandler(404, 'Image not found'));
  }
});

//Update Backend Images
exports.updateBackendImages = AsyncHandler(async (req, res, next) => {
  const { id, imageId } = req.params;
  const { image, title } = req.body;

  const homeView = await HomeView.findById(id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  let findImage = homeView.backendImages.find(
    (input) => input._id.toString() === imageId.toString()
  );

  if (findImage) {
    findImage.image = image;
    findImage.title = title;

    await homeView.save();
    return res.status(201).json(homeView);
  } else {
    return next(new ErrorHandler(404, 'Image not found'));
  }
});

// Delete Backend Image
exports.deleteBackendImage = AsyncHandler(async (req, res, next) => {
  const { id, imageId } = req.params;

  let homeView = await HomeView.findById(id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  const findImage = homeView.backendImages.find(
    (input) => input._id.toString() === imageId.toString()
  );

  if (findImage) {
    homeView.backendImages.pull(imageId);

    await homeView.save();

    return res.status(201).json(homeView);
  } else {
    return next(new ErrorHandler(404, 'Image not found'));
  }
});
