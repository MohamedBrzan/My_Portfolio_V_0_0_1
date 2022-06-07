import axios from 'axios';

//** Experience Card Functions**/

// Create Portfolio

export const createPortfolio = async (
  setLoading,
  image,
  title,
  description,
  link
) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `http://localhost:5000/portfolio`,
      data: { image, title, description, link },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Experience --  Experience & Image

export const updatePortfolio = async (
  setLoading,
  id,
  image,
  title,
  description,
  link
) => {
  try {
    setLoading(true);
    await axios({
      method: 'PUT',
      url: `http://localhost:5000/portfolio/${id}`,
      data: { image, title, description, link },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Delete Experience --  Experience & Image

export const deletePortfolio = async (setLoading, id) => {
  try {
    setLoading(true);
    await axios({
      method: 'DELETE',
      url: `http://localhost:5000/portfolio/${id}`,
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};
