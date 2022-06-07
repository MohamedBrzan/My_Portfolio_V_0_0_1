import axios from 'axios';

//* Devtools Functions */

// Add Devtools to Api
export const addDevtoolToApi = async (id, setLoading, tool, image) => {
  try {
    setLoading(true);
    await axios({
      method: 'post',
      url: `http://localhost:5000/api/v1/about/${id}/devtools`,
      data: {
        tool,
        image,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Devtool
export const updateDevtool = async (id, setLoading, toolId, tool, image) => {
  try {
    setLoading(true);
    await axios({
      method: 'post',
      url: `http://localhost:5000/api/v1/about/${id}/devtools`,
      data: {
        toolId,
        tool,
        image,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Delete Devtool From Api
export const deleteDevtoolFromApi = async (id, setLoading, toolId) => {
  try {
    setLoading(true);
    await axios({
      method: 'post',
      url: `http://localhost:5000/api/v1/about/${id}/devtools`,
      data: {
        toolId,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};
