import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: localStorage.getItem('token') ? true : false,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = globalSlice.actions;

export default globalSlice.reducer;
