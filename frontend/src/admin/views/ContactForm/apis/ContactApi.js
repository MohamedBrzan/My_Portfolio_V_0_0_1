import axios from 'axios';

//* Intro Functions */

// Create Contact
export const createMessage = async (id, name, email, subject, message) => {
  try {
    await axios({
      method: 'POST',
      url: `http://localhost:5000/api/v1/contact/${id}`,
      data: {
        name,
        email,
        subject,
        message,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

// update Intro Title & Description & Image
export const UpdateContact = async (id, name, email, phone, location) => {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
};
