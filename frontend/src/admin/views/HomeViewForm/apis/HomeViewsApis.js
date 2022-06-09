import axios from 'axios';

//* HomeViews Functions */

// Update Intro Title & Description
export const updateHomeViewIntroInDatabase = async (
  id,
  firstPart,
  coloredPart,
  lastPart,
  description
) => {
  try {
    await axios({
      method: 'PUT',
      url: `/api/v1/${id}`,
      data: {
        title: {
          firstPart,
          coloredPart,
          lastPart,
        },
        description,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add Frontend Images
export const addFrontendImageToDatabase = async (id, image, title) => {
  try {
    await axios({
      method: 'POST',
      url: `/api/v1/frontend/${id}`,
      data: {
        image,
        title,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update Frontend Image
export const updateFrontendImageInDatabase = async (
  id,
  imageId,
  image,
  title
) => {
  try {
    await axios({
      method: 'PUT',
      url: `/api/v1/${id}/frontend/${imageId}`,
      data: {
        image,
        title,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Frontend Image
export const deleteFrontendImageFromDatabase = async (id, imageId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/${id}/frontend/${imageId}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add Backend Images
export const addBackendImageToDatabase = async (id, image, title) => {
  try {
    await axios({
      method: 'POST',
      url: `/api/v1/backend/${id}`,
      data: {
        image,
        title,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update Backend Image
export const updateBackendImageInDatabase = async (
  id,
  imageId,
  image,
  title
) => {
  try {
    await axios({
      method: 'PUT',
      url: `/api/v1/${id}/backend/${imageId}`,
      data: {
        image,
        title,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Backend Image
export const deleteBackendImageFromDatabase = async (id, imageId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/${id}/backend/${imageId}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
