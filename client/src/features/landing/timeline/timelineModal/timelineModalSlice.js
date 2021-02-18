import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  northwestern: false,
  tl: false,
  tc: false,
  sa: false,
  a: false,
  dpu: false,
  clc: false,
};

export const timelineModalSlice = createSlice({
  name: "timelineModal",
  initialState,
  reducers: {
    TOGGLE_NW: (state) => {
      if (state.northwestern === false) {
        return { ...state, northwestern: true };
      } else {
        return { ...state, northwestern: false };
      }
    },
    TOGGLE_TL: (state) => {
      if (state.tl === false) {
        return { ...state, tl: true };
      } else {
        return { ...state, tl: false };
      }
    },
    TOGGLE_TC: (state) => {
      if (state.tc === false) {
        return { ...state, tc: true };
      } else {
        return { ...state, tc: false };
      }
    },
    TOGGLE_SA: (state) => {
      if (state.sa === false) {
        return { ...state, sa: true };
      } else {
        return { ...state, sa: false };
      }
    },
    TOGGLE_A: (state) => {
      if (state.a === false) {
        return { ...state, a: true };
      } else {
        return { ...state, a: false };
      }
    },
    TOGGLE_DPU: (state) => {
      if (state.dpu === false) {
        return { ...state, dpu: true };
      } else {
        return { ...state, dpu: false };
      }
    },
    TOGGLE_CLC: (state) => {
      if (state.clc === false) {
        return { ...state, clc: true };
      } else {
        return { ...state, clc: false };
      }
    },
  },
});

export const {
  TOGGLE_NW,
  TOGGLE_TL,
  TOGGLE_TC,
  TOGGLE_SA,
  TOGGLE_A,
  TOGGLE_DPU,
  TOGGLE_CLC,
} = timelineModalSlice.actions;

//Selector
export const selectTimelineModal = (state) => state.timelineModal;

export default timelineModalSlice.reducer;
