import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  location: false,
};

export const ToggleSlices = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleLogin: state => {
      state.login = !state.login;
    },
    toggleLocation: state => {
      state.location = !state.location;
    },
  },
});
export const { toggleLocation, toggleLogin } = ToggleSlices.actions;

export default ToggleSlices.reducer;
