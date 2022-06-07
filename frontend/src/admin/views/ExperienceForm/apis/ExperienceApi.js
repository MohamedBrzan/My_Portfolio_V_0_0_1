import axios from 'axios';

//** Experience Card Functions**/

// Add One Experience

export const addExperience = async (setLoading, id, experience, image) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `http://localhost:5000/experience/${id}/experience`,
      data: { experience, image },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Experience --  Experience & Image

export const updateOneExperience = async (
  setLoading,
  id,
  experienceId,
  experience,
  image
) => {
  try {
    setLoading(true);
    await axios({
      method: 'PUT',
      url: `http://localhost:5000/experience/${id}/experience`,
      data: { experienceId, experience, image },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Delete Experience --  Experience & Image

export const deleteOneExperience = async (setLoading, id, experienceId) => {
  try {
    setLoading(true);
    await axios({
      method: 'DELETE',
      url: `http://localhost:5000/experience/${id}/experience`,
      data: { experienceId },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};
