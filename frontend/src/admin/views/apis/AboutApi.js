import axios from 'axios';

//* Intro Functions */

// Add Intro To Api
export const addIntroToApi = async (
  setLoading,
  firstPart,
  coloredPart,
  lastPart,
  description,
  introImage,
  text,
  variant
) => {
  try {
    setLoading(true);
    await axios({
      method: 'post',
      url: '/api/v1/about',
      data: {
        title: { firstPart, coloredPart, lastPart },
        button: { text, variant },
        description,
        image: introImage,
      },
    });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};

// update Intro Title & Description & Image
export const UpdateAbout = async (
  setLoading,
  aboutId,
  firstPart,
  coloredPart,
  lastPart,
  description,
  introImage,
  text,
  variant,
  navigate
) => {
  try {
    setLoading(true);

    if (introImage === '') {
      setLoading(false);
      return alert('please select introImage');
    }

    await axios({
      method: 'put',
      url: `/api/v1/about/${aboutId}`,
      data: {
        title: { firstPart, coloredPart, lastPart },
        button: { text, variant },
        description,
        image: introImage,
      },
    });
    setLoading(false);
    navigate('/about');
  } catch (error) {
    setLoading(false);
    console.log(error.message);
  }
};
