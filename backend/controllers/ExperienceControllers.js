const AsyncHandler = require('../middleWares/AsyncHandler');
const ErrorHandler = require('../middleWares/ErrorHandler');
const Experience = require('../models/Experience');

// Get Experiences
exports.getExperience = AsyncHandler(async (req, res, next) => {
  const experience = await Experience.find();

  res.status(200).json(experience);
});

// Create Experience
exports.createExperience = AsyncHandler(async (req, res, next) => {
  const { title, description } = req.body;

  const experience = await Experience.create({ title, description });

  res.status(201).json(experience);
});

// Add A New Experience
exports.addExperience = AsyncHandler(async (req, res, next) => {
  const { image, description } = req.body;

  let experience = await Experience.findById(req.params.id);

  if (!experience || !experience.experience) {
    return next(new ErrorHandler(404, 'Experience not found'));
  }

  experience = await Experience.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        experience: {
          image,
          description,
        },
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(201).json(experience);
});

// Set All Experience
exports.SetAllExperience = AsyncHandler(async (req, res, next) => {
  const { title, description } = req.body;

  const experience = await Experience.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      experience: {
        image: req.body.experience.image,
        description: req.body.experience.description,
      },
    },
    { new: true }
  );

  res.status(200).json(experience);
});

// Update One Experience
exports.updateOneExperience = AsyncHandler(async (req, res, next) => {
  const { image, description } = req.body;

  const experience = await Experience.findById(req.params.id);

  const findExperience = experience.experience.find(
    (experience) => experience._id.toString() === req.params.experienceId
  );
  if (findExperience) {
    findExperience.image = image;
    findExperience.description = description;

    await experience.save();

    return res.status(200).json(experience);
  } else {
    return next(new ErrorHandler(404, 'Experience not found or deleted'));
  }
});
