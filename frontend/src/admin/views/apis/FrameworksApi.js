import axios from 'axios';

//* Skills Functions */

// Add Frontend Framework To Api
export const addFrontendFrameworkToApi = async (
  setLoading,
  aboutId,
  frontendFramework,
  frontendFrameworkProgress,
  frontendFrameworkVariant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `/api/v1/about/${aboutId}/frontend/framework`,
      data: {
        frontendFramework,
        frontendFrameworkProgress,
        frontendFrameworkVariant,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Frontend Framework
export const updateFrontendFrameworkInDatabase = async (
  setLoading,
  aboutId,
  frameworkId,
  frontendFramework,
  frontendFrameworkProgress,
  frontendFrameworkVariant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'PUT',
      url: `/api/v1/about/${aboutId}/frontend/framework`,
      data: {
        frameworkId,
        frontendFramework,
        frontendFrameworkProgress,
        frontendFrameworkVariant,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Delete Frontend Framework From Api
export const deleteFrontendFrameworkFromApi = async (aboutId, frameworkId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/about/${aboutId}/frontend/framework`,
      data: {
        frameworkId,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add Backend Framework To Api
export const addBackendFrameworkToApi = async (
  setLoading,
  aboutId,
  backendFramework,
  backendFrameworkProgress,
  backendFrameworkVariant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `/api/v1/about/${aboutId}/backend/framework`,
      data: {
        backendFramework,
        backendFrameworkProgress,
        backendFrameworkVariant,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Backend Framework
export const updateBackendFrameworkInDatabase = async (
  setLoading,
  aboutId,
  frameworkId,
  backendFramework,
  backendFrameworkProgress,
  backendFrameworkVariant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'PUT',
      url: `/api/v1/about/${aboutId}/backend/framework`,
      data: {
        frameworkId,
        backendFramework,
        backendFrameworkProgress,
        backendFrameworkVariant,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Delete Backend Frameworks From Api
export const deleteBackendFrameworkFromApi = async (aboutId, frameworkId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/about/${aboutId}/backend/framework`,
      data: {
        frameworkId,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
