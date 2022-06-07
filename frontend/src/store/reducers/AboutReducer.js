import { createSlice } from '@reduxjs/toolkit';

const AboutReducer = createSlice({
  name: 'AboutReducer',
  initialState: localStorage.getItem('AboutDetails')
    ? JSON.parse(localStorage.getItem('AboutDetails'))
    : {},

  reducers: {
    showAboutDetails: (state, actions) => {
      state = actions.payload;
      localStorage.setItem('AboutDetails', JSON.stringify(state));
      return state;
    },
  },
});

export const { showAboutDetails } = AboutReducer.actions;

export default AboutReducer.reducer;
