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
  // const { programmingTitle, otherTitle } = req.body;

  const experience = await Experience.create(req.body);

  res.status(201).json(experience);
});

// Update Experience Titles
exports.updateExperienceTitles = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { programmingTitle, otherTitle } = req.body;

  const experience = await Experience.findByIdAndUpdate(
    id,
    {
      programming: {
        programmingTitle,
      },
      other: {
        otherTitle,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json(experience);
});

// Get Programming Experience By Id
exports.getProgrammingExperienceById = AsyncHandler(async (req, res, next) => {
  const { id, experienceId } = req.params;

  const experience = await Experience.findById(id);

  if (!experience) return next(new ErrorHandler(404, 'Experience Not Found'));

  const findExperience = experience.programming.experience.find(
    (experience) => experience._id.toString() === experienceId
  );

  if (findExperience) {
    return res.status(200).json(findExperience);
  } else {
    return next(new ErrorHandler(404, 'Experience Not Found'));
  }
});

// Create Programming Experience
exports.createProgrammingExperience = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image, title, experience } = req.body;

  let theExperience = await Experience.findById(id);

  if (!theExperience)
    return next(new ErrorHandler(404, 'Experience not found'));

  const programming = {
    image,
    title,
    experience,
  };

  theExperience.programming.experience.push(programming);

  await theExperience.save();

  res.status(201).json(theExperience);
});

// Get Other Experience By Id
exports.getOtherExperienceById = AsyncHandler(async (req, res, next) => {
  const { id, experienceId } = req.params;

  const experience = await Experience.findById(id);

  if (!experience) return next(new ErrorHandler(404, 'Experience Not Found'));

  const findExperience = experience.other.experience.find(
    (experience) => experience._id.toString() === experienceId
  );

  if (findExperience) {
    return res.status(200).json(findExperience);
  } else {
    return next(new ErrorHandler(404, 'Experience Not Found'));
  }
});

// Create Other Experience
exports.createOtherExperience = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image, title, experience } = req.body;

  let theExperience = await Experience.findById(id);

  if (!theExperience)
    return next(new ErrorHandler(404, 'Experience not found'));

  const other = {
    image,
    title,

    experience,
  };

  theExperience.other.experience.push(other);

  await theExperience.save();

  res.status(201).json(theExperience);
});

// Update Programming Experience
exports.updateProgrammingExperience = AsyncHandler(async (req, res, next) => {
  const { id, experienceId } = req.params;
  const { image, experience, title } = req.body;

  const theExperience = await Experience.findById(id);

  if (!theExperience)
    return next(new ErrorHandler(404, 'Experience not found'));

  const findProgrammingExperience = theExperience.programming.experience.find(
    (exp) => exp._id.toString() === experienceId
  );

  if (findProgrammingExperience) {
    findProgrammingExperience.image = image;
    findProgrammingExperience.title = title;
    findProgrammingExperience.experience = experience;

    await theExperience.save();

    res.status(200).json(theExperience);
  } else {
    next(
      new ErrorHandler(404, 'Experience not found in Programming Or Deleted')
    );
  }
});

// Update Other Experience
exports.updateOtherExperience = AsyncHandler(async (req, res, next) => {
  const { id, experienceId } = req.params;
  const { image, experience, title } = req.body;

  const theExperience = await Experience.findById(id);

  if (!theExperience)
    return next(new ErrorHandler(404, 'Experience not found'));

  const findOtherExperience = theExperience.other.experience.find(
    (exp) => exp._id.toString() === experienceId
  );

  if (findOtherExperience) {
    findOtherExperience.image = image;
    findOtherExperience.title = title;
    findOtherExperience.experience = experience;

    await theExperience.save();

    res.status(200).json(theExperience);
  } else {
    next(
      new ErrorHandler(404, 'Experience not found in Programming Or Deleted')
    );
  }
});

// Delete Programming Experience
exports.deleteProgrammingExperience = AsyncHandler(async (req, res, next) => {
  const { id, experienceId } = req.params;

  const experience = await Experience.findById(id);

  if (!experience) return next(new ErrorHandler(404, 'Experience not found'));

  const findProgrammingExperience = experience.programming.experience.find(
    (exp) => exp._id.toString() === experienceId
  );

  if (findProgrammingExperience) {
    experience.programming.experience.pull(experienceId);

    await experience.save();

    return res.status(200).json(experience);
  } else {
    return next(new ErrorHandler(404, 'Experience not found in Programming'));
  }
});

// Delete Other Experience
exports.deleteOtherExperience = AsyncHandler(async (req, res, next) => {
  const { id, experienceId } = req.params;

  const experience = await Experience.findById(id);

  if (!experience) return next(new ErrorHandler(404, 'Experience not found'));

  const findProgrammingExperience = experience.other.experience.find(
    (exp) => exp._id.toString() === experienceId
  );

  if (findProgrammingExperience) {
    experience.other.experience.pull(experienceId);

    await experience.save();

    return res.status(200).json(experience);
  } else {
    return next(new ErrorHandler(404, 'Experience not found in Other'));
  }
});
