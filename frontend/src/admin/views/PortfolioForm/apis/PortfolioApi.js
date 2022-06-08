import axios from 'axios';

//** Experience Card Functions**/

// Add Frontend Project To Api

export const addFrontendProjectToApi = async (
  id,
  frontendProImage,
  frontendProTitle,
  frontendProDescription,
  frontendProLink
) => {
  try {
    await axios({
      method: 'POST',
      url: `http://localhost:5000/api/v1/portfolio/${id}/frontend`,
      data: {
        image: frontendProImage,
        title: frontendProTitle,
        description: frontendProDescription,
        link: frontendProLink,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update Frontend Project

export const updateFrontendProjectInDatabase = async (
  id,
  projectId,
  frontendProImage,
  frontendProTitle,
  frontendProDescription,
  frontendProLink
) => {
  try {
    await axios({
      method: 'PUT',
      url: `http://localhost:5000/api/v1/portfolio/${id}/frontend/${projectId}`,
      data: {
        image: frontendProImage,
        title: frontendProTitle,
        description: frontendProDescription,
        link: frontendProLink,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Frontend Project

export const deleteFrontendProjectFromDatabase = async (id, projectId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `http://localhost:5000/api/v1/portfolio/${id}/frontend/${projectId}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add Backend Project To Api

export const addBackendProjectToApi = async (
  id,
  backendProImage,
  backendProTitle,
  backendProDescription,
  backendProLink
) => {
  try {
    await axios({
      method: 'POST',
      url: `http://localhost:5000/api/v1/portfolio/${id}/backend`,
      data: {
        image: backendProImage,
        title: backendProTitle,
        description: backendProDescription,
        link: backendProLink,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update Backend Project

export const updateBackendProjectInDatabase = async (
  id,
  projectId,
  backendProImage,
  backendProTitle,
  backendProDescription,
  backendProLink
) => {
  try {
    await axios({
      method: 'PUT',
      url: `http://localhost:5000/api/v1/portfolio/${id}/backend/${projectId}`,
      data: {
        image: backendProImage,
        title: backendProTitle,
        description: backendProDescription,
        link: backendProLink,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Backend Project

export const deleteBackendProjectFromDatabase = async (id, projectId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `http://localhost:5000/api/v1/portfolio/${id}/backend/${projectId}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add FullStack Project To Api

export const addFullStackProjectToApi = async (
  id,
  fullStackProImage,
  fullStackProTitle,
  fullStackProDescription,
  fullStackProLink
) => {
  try {
    await axios({
      method: 'POST',
      url: `http://localhost:5000/api/v1/portfolio/${id}/fullStack`,
      data: {
        image: fullStackProImage,
        title: fullStackProTitle,
        description: fullStackProDescription,
        link: fullStackProLink,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update FullStack Project

export const updateFullStackProjectInDatabase = async (
  id,
  projectId,
  fullStackProImage,
  fullStackProTitle,
  fullStackProDescription,
  fullStackProLink
) => {
  try {
    await axios({
      method: 'PUT',
      url: `http://localhost:5000/api/v1/portfolio/${id}/fullStack/${projectId}`,
      data: {
        image: fullStackProImage,
        title: fullStackProTitle,
        description: fullStackProDescription,
        link: fullStackProLink,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete FullStack Project

export const deleteFullStackProjectFromDatabase = async (id, projectId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `http://localhost:5000/api/v1/portfolio/${id}/fullStack/${projectId}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
