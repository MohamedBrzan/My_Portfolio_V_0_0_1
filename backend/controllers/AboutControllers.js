const AsyncHandler = require('../middleWares/AsyncHandler');
const ErrorHandler = require('../middleWares/ErrorHandler');
const About = require('../models/About');

// Get About
exports.getAbout = AsyncHandler(async (req, res, next) => {
  const about = await About.find();

  res.status(200).json(about);
});

// Create About
exports.createAbout = AsyncHandler(async (req, res, next) => {
  const newAbout = {
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
  };

  const about = await About.create(newAbout);

  res.status(201).json(about);
});

// Update About
exports.updateAbout = AsyncHandler(async (req, res, next) => {
  const about = await About.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(about);
});

// Add About Services
exports.addAboutServices = AsyncHandler(async (req, res, next) => {
  const about = await About.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        services: req.body,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(about);
});

// Set All Services And Set New Service
exports.SetAllServices = AsyncHandler(async (req, res, next) => {
  const about = await About.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        services: req.body,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(about);
});

// Update One Service
exports.updateService = AsyncHandler(async (req, res, next) => {
  const { serviceId } = req.params;

  const about = await About.findById(req.params.id);

  const findService = about.services.find(
    (service) => service._id.toString() === serviceId
  );

  if (findService) {
    findService.name = req.body.name;
    findService.description = req.body.description;

    await about.save();

    return res.status(200).json(about);
  } else {
    return next(new ErrorHandler(404, 'Service not found or deleted'));
  }
});

// Delete Services
exports.deleteService = AsyncHandler(async (req, res, next) => {
  const { serviceId } = req.params;

  const about = await About.findById(req.params.id);

  const findService = about.services.find(
    (service) => service._id === serviceId
  );

  if (findService) {
    about = await About.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          services: {
            _id: req.params.serviceId,
          },
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json(about);
  } else {
    return next(new ErrorHandler(404, 'Service not found or deleted'));
  }
});

// Delete All Services
exports.deleteAllServices = AsyncHandler(async (req, res, next) => {
  const about = await About.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        services: [],
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(about);
});
