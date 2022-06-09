import axios from 'axios';

//* Skills Functions */

// Add Frontend Tech To Api
export const addFrontendTechToApi = async (
  setLoading,
  aboutId,
  frontendTech,
  frontendTechProgress,
  frontendTechVariant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `/api/v1/about/${aboutId}/frontend/tech`,
      data: {
        frontendTech,
        frontendTechProgress,
        frontendTechVariant,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Frontend Tech
export const updateFrontendTechInDatabase = async (
  setLoading,
  aboutId,
  techId,
  frontendTech,
  frontendTechProgress,
  frontendTechVariant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'PUT',
      url: `/api/v1/about/${aboutId}/frontend/tech`,
      data: {
        techId,
        frontendTech,
        frontendTechProgress,
        frontendTechVariant,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Delete Frontend Tech From Api
export const deleteFrontendTechFromApi = async (aboutId, techId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/about/${aboutId}/frontend/tech`,
      data: {
        techId,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add Backend Tech To Api
export const addBackendTechToApi = async (
  setLoading,
  aboutId,
  backendTech,
  backendTechProgress,
  backendTechVariant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `/api/v1/about/${aboutId}/backend/tech`,
      data: {
        backendTech,
        backendTechProgress,
        backendTechVariant,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Backend Tech
export const updateBackendTechInDatabase = async (
  setLoading,
  aboutId,
  techId,
  backendTech,
  backendTechProgress,
  backendTechVariant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'PUT',
      url: `/api/v1/about/${aboutId}/backend/tech`,
      data: {
        techId,
        backendTech,
        backendTechProgress,
        backendTechVariant,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Delete Backend Techs From Api
export const deleteBackendTechFromApi = async (aboutId, techId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/about/${aboutId}/backend/tech`,
      data: {
        techId,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
