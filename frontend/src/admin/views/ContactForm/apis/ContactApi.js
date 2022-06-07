import axios from 'axios';

//* Intro Functions */

// Create Contact
export const createContact = async (
  setLoading,
  name,
  email,
  phone,
  location
) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: 'http://localhost:5000/api/v1/contact',
      data: {
        name,
        email,
        phone,
        location,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// update Intro Title & Description & Image
export const UpdateContact = async (
  setLoading,
  id,
  name,
  email,
  phone,
  location
) => {
  try {
    setLoading(true);
    await axios({
      method: 'PUT',
      url: `http://localhost:5000/api/v1/contact/${id}`,
      data: {
        name,
        email,
        phone,
        location,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};
