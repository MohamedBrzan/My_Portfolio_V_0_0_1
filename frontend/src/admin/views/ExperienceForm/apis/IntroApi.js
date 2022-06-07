import axios from 'axios';

//** Experience Functions**/

// Create Experience

export const createExperience = async (setLoading, title, description) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `http://localhost:5000/experience`,
      data: { title, description },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Experience Title & Description

export const updateExperience = async (setLoading, id, title, description) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `http://localhost:5000/experience/${id}`,
      data: { title, description },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};
