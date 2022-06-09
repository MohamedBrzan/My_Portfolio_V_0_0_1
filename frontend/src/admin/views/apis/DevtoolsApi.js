import axios from 'axios';

//* Devtools Functions */

// Add Devtools to Api
export const addDevtoolToApi = async (setLoading, aboutId, tool, image) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `/api/v1/about/${aboutId}/devtool`,
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
export const updateDevtool = async (
  setLoading,
  aboutId,
  devtoolId,
  tool,
  image
) => {
  try {
    if (image === '') {
      alert('Error, Please upload an image In Next Time');
      return;
    }

    setLoading(true);
    await axios({
      method: 'PUT',
      url: `/api/v1/about/${aboutId}/devtool/${devtoolId}`,
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

// Delete Devtool From Api
export const deleteDevtoolFromApi = async (aboutId, devtoolId) => {
  try {
    // setLoading(true);
    await axios({
      method: 'DELETE',
      url: `/api/v1/about/${aboutId}/devtool/${devtoolId}`,
    });
    // setLoading(false);
  } catch (error) {
    // setLoading(false);
    console.log(error.message);
  }
};
