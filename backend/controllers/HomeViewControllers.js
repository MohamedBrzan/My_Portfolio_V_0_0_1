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
    coloredPart:req.body.title.coloredPart,
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

// Update HomeView
exports.updateHomeView = AsyncHandler(async (req, res, next) => {
  const { title, description, frontendImage, backendImages } = req.body;

  const homeView = await HomeView.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      frontendImage,
      backendImages,
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
  const { frontendImages } = req.body;

  let homeView = await HomeView.findById(req.params.id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  for (const images in frontendImages) {
    if (Object.hasOwnProperty.call(frontendImages, images)) {
      const element = frontendImages[images];

      const findImage = homeView.frontendImages.find(
        (image) => image === element
      );

      if (!findImage) {
        homeView = await HomeView.findByIdAndUpdate(
          req.params.id,
          {
            $push: {
              frontendImages,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return res.status(201).json(homeView);
      } else {
        return next(
          new ErrorHandler(409, `Image already exists => ${findImage}`)
        );
      }
    }
  }
});

// Delete Frontend Image
exports.deleteFrontendImage = AsyncHandler(async (req, res, next) => {
  const { targetImage } = req.body;

  let homeView = await HomeView.findById(req.params.id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  const findImage = homeView.frontendImages.find(
    (frontendImage) => frontendImage.toString() === targetImage.toString()
  );

  if (findImage) {
    const filterImages = homeView.frontendImages.filter(
      (image) => image !== targetImage
    );

    homeView = await HomeView.findByIdAndUpdate(
      req.params.id,
      {
        frontendImages: filterImages,
      },
      {
        new: true,
        runValidators: true,
      }
    );
  } else {
    return next(new ErrorHandler(404, 'Image not found'));
  }

  return res.status(201).json(homeView);
});

//Add Backend Images
exports.addBackendImages = AsyncHandler(async (req, res, next) => {
  const { backendImages } = req.body;

  let homeView = await HomeView.findById(req.params.id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  for (const images in backendImages) {
    if (Object.hasOwnProperty.call(backendImages, images)) {
      const element = backendImages[images];

      const findImage = homeView.backendImages.find(
        (image) => image === element
      );

      if (!findImage) {
        homeView = await HomeView.findByIdAndUpdate(
          req.params.id,
          {
            $push: {
              backendImages,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return res.status(201).json(homeView);
      } else {
        return next(
          new ErrorHandler(409, `Image already exists => ${findImage}`)
        );
      }
    }
  }
});

// Delete Backend Image
exports.deleteBackendImage = AsyncHandler(async (req, res, next) => {
  const { targetImage } = req.body;

  let homeView = await HomeView.findById(req.params.id);

  if (!homeView) {
    return next(new ErrorHandler(404, 'HomeView not found'));
  }

  const findImage = homeView.backendImages.find(
    (frontendImage) => frontendImage.toString() === targetImage.toString()
  );

  if (findImage) {
    const filterImages = homeView.backendImages.filter(
      (image) => image !== targetImage
    );

    homeView = await HomeView.findByIdAndUpdate(
      req.params.id,
      {
        backendImages: filterImages,
      },
      {
        new: true,
        runValidators: true,
      }
    );
  } else {
    return next(new ErrorHandler(404, 'Image not found'));
  }

  return res.status(201).json(homeView);
});
