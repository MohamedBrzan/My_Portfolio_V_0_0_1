const express = require('express');
const {
  getAbout,
  createAbout,
  updateAbout,
  addService,
  deleteService,
  updateService,
  addFrontendTech,
  updateFrontendTech,
  deleteFrontendTech,
  addBackendTech,
  updateBackendTech,
  deleteBackendTech,
  addDevTool,
  updateDevTool,
  deleteDevTool,
  getAboutById,
  getServiceById,
  addFrontendFramework,
  updateFrontendFramework,
  deleteFrontendFramework,
  addBackendFramework,
  updateBackendFramework,
  deleteBackendFramework,
  getAllFrontendTechs,
  getAllBackendTechs,
  getFrontendTechById,
  getBackendTechById,
  getFrontendFrameworkById,
  getBackendFrameworkById,
  getDevtoolById,
} = require('../controllers/AboutControllers');
const Authentication = require('../middleWares/Authentication');
const router = express.Router();

// Get About & Create New About

router.route('/').get(getAbout).post(createAbout).put(updateAbout);

// Update About title & description & image & Add About Services

router.route('/:aboutId').get(getAboutById).post(addService).put(updateAbout);

// Add About Services & Delete Service & Set All Services & Delete All Services

router.route('/:aboutId/:serviceId').put(updateService).delete(deleteService);

// Add About Services & Delete Service & Set All Services & Delete All Services

router.route('/:aboutId/:serviceId').get(getServiceById);

// Get All Frontend Tech

router.route('/:aboutId/frontend/tech').get(getAllFrontendTechs);

// Get Backend Tech By Id

router.route('/:aboutId/frontend/tech/:techId').get(getFrontendTechById);

// Add Frontend Techs  & Update Frontend Tech  & Delete Frontend Tech

router
  .route('/:aboutId/frontend/tech')
  .post(addFrontendTech)
  .put(updateFrontendTech)
  .delete(deleteFrontendTech);

// Get Frontend Framework By Id

router.route('/:aboutId/frontend/:frameworkId').get(getFrontendFrameworkById);

// Add Frontend Frameworks  & Update Frontend Frameworks  & Delete Frontend Frameworks

router
  .route('/:aboutId/frontend/framework')
  .post(addFrontendFramework)
  .put(updateFrontendFramework)
  .delete(deleteFrontendFramework);

// Get All Backend Tech

router.route('/:aboutId/backend/tech').get(getAllBackendTechs);

// Get Backend Tech By Id

router.route('/:aboutId/backend/tech/:techId').get(getBackendTechById);

// Add Backend Techs & Update Backend Tech & Delete Backend Tech

router
  .route('/:aboutId/backend/tech')
  .post(addBackendTech)
  .put(updateBackendTech)
  .delete(deleteBackendTech);

// Get Frontend Framework By Id

router.route('/:aboutId/backend/:frameworkId').get(getBackendFrameworkById);

// Add Backend Frameworks  & Update Backend Frameworks  & Delete Backend Frameworks

router
  .route('/:aboutId/backend/framework')
  .post(addBackendFramework)
  .put(updateBackendFramework)
  .delete(deleteBackendFramework);

// Get Devtool By Id

router.route('/:aboutId/devtool').post(addDevTool);

// Get Devtool By Id && Add Dev Tools & Delete Dev Tools

router
  .route('/:aboutId/devtool/:devtoolId')
  .get(getDevtoolById)
  .put(updateDevTool)
  .delete(deleteDevTool);

module.exports = router;
