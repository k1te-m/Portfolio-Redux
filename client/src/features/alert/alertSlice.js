import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    SET_ALERT: (state, action) => {
      state.push({
        message: action.payload.message,
        type: action.payload.type,
      });
    },
  },
});

export const { SET_ALERT } = alertSlice.actions;

// Selector
export const selectAlert = (state) => state.alert;

export default alertSlice.reducer;
