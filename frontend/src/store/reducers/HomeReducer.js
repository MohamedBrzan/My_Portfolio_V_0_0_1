import { createSlice } from '@reduxjs/toolkit';

const HomeReducer = createSlice({
  name: 'HomeReducer',
  initialState: {},

  reducers: {
    showHomeDetails: (state, actions) => {
      state = actions.payload;
    },
  },
});

export const { showHomeDetails } = HomeReducer.actions;

export default HomeReducer.reducer;
