import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    TOGGLE_NAV: (state) => {
      return state ? false : true;
    },
  },
});

export const { TOGGLE_NAV } = navSlice.actions;

// Selector
export const selectNav = (state) => state.nav;

export default navSlice.reducer;
