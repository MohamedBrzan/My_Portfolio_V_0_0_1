import axios from 'axios';

//* Services Functions */

// Add Services To Api
export const addServiceToApi = async (
  setLoading,
  aboutId,
  icon,
  service,
  serviceDesc,
  navigate
) => {
  try {
    setLoading(true);
    await axios({
      method: 'POST',
      url: `http://localhost:5000/api/v1/about/${aboutId}`,
      data: { icon, service, serviceDesc },
    });
    setLoading(false);
    navigate('/about');
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Update Service
export const updateServiceInDatabase = async (
  setLoading,
  aboutId,
  serviceId,
  icon,
  service,
  serviceDesc,
  navigate
) => {
  try {
    setLoading(true);
    await axios({
      method: 'PUT',
      url: `http://localhost:5000/api/v1/about/${aboutId}/${serviceId}`,
      data: { icon, service, serviceDesc },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// Delete Services From Api
export const deleteServiceFromApi = async (aboutId, serviceId) => {
  try {
    await axios({
      method: 'DELETE',
      url: `http://localhost:5000/api/v1/about/${aboutId}/${serviceId}`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
