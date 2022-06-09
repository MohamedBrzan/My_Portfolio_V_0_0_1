import axios from 'axios';

//* Experience Functions */

// Add Programming Experience To Api
export const updateExperienceTitles = async (
  id,
  programmingTitle,
  otherTitle
) => {
  try {
    await axios({
      method: 'POST',
      url: `/api/v1/experience/${id}`,
      data: {
        programmingTitle,
        otherTitle,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add Programming Experience To Api
export const addProgrammingExpToApi = async (
  id,
  programmingExpImage,
  programmingExpTitle,
  programmingExperience
) => {
  try {
    await axios({
      method: 'POST',
      url: `/api/v1/experience/${id}/programming`,
      data: {
        image: programmingExpImage,
        title: programmingExpTitle,
        experience: programmingExperience,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update Programming Experience
export const updateProgrammingExpInDatabase = async (
  id,
  experienceId,
  image,
  title,
  experience
) => {
  try {
    await axios({
      method: 'PUT',
      url: `/api/v1/experience/${id}/programming/${experienceId}`,
      data: {
        image,
        title,
        experience,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Programming Experience From Api
export const deleteProgrammingExpFromApi = async (id, experienceId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/experience/${id}/programming/${experienceId}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Add Other Experience To Api
export const addOtherExpToApi = async (
  id,
  otherExpImage,
  otherExpTitle,
  otherExperience
) => {
  try {
    await axios({
      method: 'POST',
      url: `/api/v1/experience/${id}/other`,
      data: {
        image: otherExpImage,
        title: otherExpTitle,
        experience: otherExperience,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Update Other Experience
export const updateOtherExpInDatabase = async (
  id,
  experienceId,
  image,
  title,
  experience
) => {
  try {
    await axios({
      method: 'PUT',
      url: `/api/v1/experience/${id}/other/${experienceId}`,
      data: {
        image,
        title,
        experience,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Other Experience From Api
export const deleteOtherExpFromApi = async (id, experienceId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `/api/v1/experience/${id}/other/${experienceId}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
