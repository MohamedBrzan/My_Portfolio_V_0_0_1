const AsyncHandler = require('../middleWares/AsyncHandler');
const ErrorHandler = require('../middleWares/ErrorHandler');
const About = require('../models/About');

// Get About
exports.getAbout = AsyncHandler(async (req, res, next) => {
  const about = await About.find();

  res.status(200).json(about);
});

//Get About By Id
exports.getAboutById = AsyncHandler(async (req, res, next) => {
  const { id } = req.params;

  let about = await About.findById(id);

  if (!about) return next(new ErrorHandler(404, 'About Not Found'));

  return res.status(200).json(about);
});

// Create About
exports.createAbout = AsyncHandler(async (req, res, next) => {
  const { description, image } = req.body;

  const title = {
    firstPart: req.body.title.firstPart,
    coloredPart: req.body.title.coloredPart,
    lastPart: req.body.title.lastPart,
  };

  const button = {
    text: req.body.button.text,
    variant: req.body.button.variant,
  };

  const about = await About.create({ title, description, button, image });

  res.status(201).json(about);
});

// Update About
exports.updateAbout = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const about = await About.findByIdAndUpdate(aboutId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json(about);
});

// Add Service
exports.addService = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { icon, service, serviceDesc } = req.body;

  let about = await About.findById(aboutId);

  if (!about) return next(new ErrorHandler(404, 'About Not Found'));

  about = await About.findByIdAndUpdate(
    aboutId,
    {
      $push: {
        services: {
          icon,
          service,
          serviceDesc,
        },
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json(about.services);
});

// Get Service By Id
exports.getServiceById = AsyncHandler(async (req, res, next) => {
  const { aboutId, serviceId } = req.params;

  let about = await About.findById(aboutId);

  if (!about) return next(new ErrorHandler(404, 'About Not Found'));

  const findService = about.services.find(
    (service) => service._id.toString() === serviceId
  );

  return res.status(200).json(findService);
});

// Update One Service
exports.updateService = AsyncHandler(async (req, res, next) => {
  const { icon, service, serviceDesc } = req.body;
  const { aboutId, serviceId } = req.params;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${id} not found`));

  const findService = about.services.find(
    (service) => service._id.toString() === serviceId
  );

  if (findService) {
    findService.icon = icon;
    findService.service = service;
    findService.serviceDesc = serviceDesc;

    await about.save();

    return res.status(200).json(about);
  } else {
    return next(new ErrorHandler(404, 'Service not found or deleted'));
  }
});

// Delete Services
exports.deleteService = AsyncHandler(async (req, res, next) => {
  const { aboutId, serviceId } = req.params;

  let about = await About.findById(aboutId);

  const findService = about.services.find(
    (service) => service._id.toString() === serviceId
  );

  if (findService) {
    about = await About.findByIdAndUpdate(
      aboutId,
      {
        $pull: {
          services: {
            _id: serviceId,
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

// Get All Frontend Techs
exports.getAllFrontendTechs = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;

  let about = await About.findById(aboutId);

  if (!about) return next(new ErrorHandler(404, 'About Not Found'));

  return res.status(200).json(about.skills.frontend.techs);
});

// Get Frontend Tech By Id
exports.getFrontendTechById = AsyncHandler(async (req, res, next) => {
  const { aboutId, techId } = req.params;

  let about = await About.findById(aboutId);

  if (!about) return next(new ErrorHandler(404, 'About Not Found'));

  const findTech = about.skills.frontend.techs.find(
    (tech) => tech._id.toString() === techId
  );

  if (findTech) {
    return res.status(200).json(findTech);
  } else {
    return next(new ErrorHandler(404, 'Tech not found or deleted'));
  }
});

// Add Frontend Tech
exports.addFrontendTech = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { frontendTech, frontendTechProgress, frontendTechVariant } = req.body;

  let about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  about.skills.frontend.techs.push({
    frontendTech,
    frontendTechProgress,
    frontendTechVariant,
  });

  await about.save();

  res.status(200).json(about.skills.frontend.techs);
});

//Update Frontend Tech
exports.updateFrontendTech = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { techId, frontendTech, frontendTechProgress, frontendTechVariant } =
    req.body;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  const findTech = about.skills.frontend.techs.find(
    (tech) => tech._id.toString() === techId
  );

  if (findTech) {
    findTech.frontendTech = frontendTech;
    findTech.frontendTechProgress = frontendTechProgress;
    findTech.frontendTechVariant = frontendTechVariant;
    await about.save();

    return res.status(200).json(findTech);
  } else {
    return next(new ErrorHandler(404, 'Skill not found or deleted'));
  }
});

// Delete Frontend Tech
exports.deleteFrontendTech = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { techId } = req.body;

  const about = await About.findById(aboutId);

  const findTech = about.skills.frontend.techs.find(
    (tech) => tech._id.toString() === techId
  );

  if (findTech) {
    about.skills.frontend.techs.pull(techId);
    await about.save();
    return res.status(200).json(about);
  } else {
    return next(new ErrorHandler(404, 'Skill not found or deleted'));
  }
});

// Get All Backend Techs
exports.getAllBackendTechs = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;

  let about = await About.findById(aboutId);

  if (!about) return next(new ErrorHandler(404, 'About Not Found'));

  return res.status(200).json(about.skills.backend.techs);
});

// Get Backend Tech By Id
exports.getBackendTechById = AsyncHandler(async (req, res, next) => {
  const { aboutId, techId } = req.params;

  let about = await About.findById(aboutId);

  if (!about) return next(new ErrorHandler(404, 'About Not Found'));

  const findTech = about.skills.backend.techs.find(
    (tech) => tech._id.toString() === techId
  );

  if (findTech) {
    return res.status(200).json(findTech);
  } else {
    return next(new ErrorHandler(404, 'Tech not found or deleted'));
  }
});

// Add Backend Tech
exports.addBackendTech = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { backendTech, backendTechProgress, backendTechVariant } = req.body;

  let about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  about.skills.backend.techs.push({
    backendTech,
    backendTechProgress,
    backendTechVariant,
  });
  await about.save();

  res.status(200).json(about.skills.backend.techs);
});

//Update Backend Tech
exports.updateBackendTech = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { techId, backendTech, backendTechProgress, backendTechVariant } =
    req.body;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  const findTech = about.skills.backend.techs.find(
    (tech) => tech._id.toString() === techId
  );

  if (findTech) {
    findTech.backendTech = backendTech;
    findTech.backendTechProgress = backendTechProgress;
    findTech.backendTechVariant = backendTechVariant;

    await about.save();

    return res.status(200).json(about);
  } else {
    return next(new ErrorHandler(404, 'Skill not found or deleted'));
  }
});

// Delete Backend Tech
exports.deleteBackendTech = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { techId } = req.body;

  const about = await About.findById(aboutId);

  const findTech = about.Skills.backend.techs.find(
    (tech) => tech._id === techId
  );

  if (findTech) {
    about.skills.backend.techs.pull(techId);
    await about.save();
    return res.status(200).json(about);
  } else {
    return next(new ErrorHandler(404, 'Skill not found or deleted'));
  }
});

// Add Frontend Framework
exports.addFrontendFramework = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const {
    frontendFramework,
    frontendFrameworkProgress,
    frontendFrameworkVariant,
  } = req.body;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  about.skills.frontend.frameworks.push({
    frontendFramework,
    frontendFrameworkProgress,
    frontendFrameworkVariant,
  });
  await about.save();

  res.status(200).json({ devtools: about });
});

// Update Frontend Framework
exports.updateFrontendFramework = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const {
    frontendFrameworkId,
    frontendFramework,
    frontendFrameworkProgress,
    frontendFrameworkVariant,
  } = req.body;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  const findFramework = about.skills.frontend.frameworks.find(
    (framework) => framework._id.toString() === frontendFrameworkId
  );

  if (findFramework) {
    findSkill.frontendFramework = frontendFramework;
    findSkill.frontendFrameworkProgress = frontendFrameworkProgress;
    findSkill.frontendFrameworkVariant = frontendFrameworkVariant;

    await about.save();

    return res.status(200).json(about);
  } else {
    return next(
      new ErrorHandler(500, `This framework Id ${aboutId} Not Found`)
    );
  }
});

// Delete Frontend Framework
exports.deleteFrontendFramework = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { frameworkId } = req.body;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  const findFramework = about.skills.frontend.frameworks.find(
    (framework) => framework._id.toString() === frameworkId
  );

  if (findFramework) {
    about.skills.frontend.frameworks.pull(frameworkId);
    await about.save();
    return res.status(200).json(about);
  } else {
    return next(
      new ErrorHandler(
        500,
        `This framework Id ${aboutId} Not Found Or Already Deleted`
      )
    );
  }
});

// Add Backend Framework
exports.addBackendFramework = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const {
    backendFramework,
    backendFrameworkProgress,
    backendFrameworkVariant,
  } = req.body;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  about.skills.backend.frameworks.push({
    backendFramework,
    backendFrameworkProgress,
    backendFrameworkVariant,
  });
  await about.save();

  res.status(200).json(about);
});

// Update Backend Framework
exports.updateBackendFramework = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const {
    backendFrameworkId,
    backendFramework,
    backendFrameworkProgress,
    backendFrameworkVariant,
  } = req.body;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  const findFramework = about.skills.backend.frameworks.find(
    (framework) => framework._id.toString() === backendFrameworkId
  );

  if (findFramework) {
    findSkill.backendFramework = backendFramework;
    findSkill.backendFrameworkProgress = backendFrameworkProgress;
    findSkill.backendFrameworkVariant = backendFrameworkVariant;

    await about.save();

    return res.status(200).json(about);
  } else {
    return next(
      new ErrorHandler(500, `This framework Id ${aboutId} Not Found`)
    );
  }
});

// Delete Backend Framework
exports.deleteBackendFramework = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { frameworkId } = req.body;

  const about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  const findFramework = about.skills.backend.frameworks.find(
    (framework) => framework._id.toString() === frameworkId
  );

  if (findFramework) {
    about.skills.backend.frameworks.pull(frameworkId);
    await about.save();
    return res.status(200).json(about);
  } else {
    return next(
      new ErrorHandler(
        500,
        `This framework Id ${aboutId} Not Found Or Already Deleted`
      )
    );
  }
});

// Add DevTool
exports.addDevTool = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { tool, image } = req.body;

  let about = await About.findById(aboutId);

  if (!about)
    return next(new ErrorHandler(404, `This About Id ${aboutId} not found`));

  about = await About.findByIdAndUpdate(
    aboutId,
    {
      $push: {
        devtools: { tool, image },
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json(about);
});

// Update DevTools
exports.updateDevTool = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { toolId, tool, image } = req.params;

  const about = await About.findById(aboutId);

  const findTool = about.devtools.find(
    (tool) => tool._id.toString() === toolId
  );

  if (findTool) {
    findTool.tool = tool;
    findTool.image = image;

    await about.save();

    return res.status(200).json(about);
  } else {
    return next(new ErrorHandler(404, 'Tool not found or deleted'));
  }
});

// Delete DevTool
exports.deleteDevTool = AsyncHandler(async (req, res, next) => {
  const { aboutId } = req.params;
  const { toolId } = req.body;

  const about = await About.findById(aboutId);

  const findTool = about.devtools.find((tool) => tool._id === toolId);

  if (findTool) {
    about = await About.findByIdAndUpdate(
      aboutId,
      {
        $pull: {
          devtools: {
            _id: req.params.toolId,
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
    return next(new ErrorHandler(404, 'Tool not found or deleted'));
  }
});
