import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../../utils/API";

const initialState = {
  isLoading: false,
  repos: [],
};

export const loadRepos = createAsyncThunk(
  "portfolio/loadRepos",
  async (arg, thunkAPI) => {
    const response = await API.getRepos();
    return response.data;
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: {
    [loadRepos.pending]: (state) => {
      state.isLoading = true;
    },
    [loadRepos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.repos = action.payload;
    },
    [loadRepos.rejected]: (state) => {
      state.isLoading = false;
      state.repos = null;
    },
  },
});

// Selector
export const selectPortfolio = (state) => state.portfolio.repos;
export const selectPortfolioLoading = (state) => state.portfolio.isLoading;

export default portfolioSlice.reducer;
