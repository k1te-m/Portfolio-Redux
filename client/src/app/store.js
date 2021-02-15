import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import portfolioReducer from "../features/landing/portfolio/portfolioSlice";
import modalReducer from "../features/modal/modalSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    portfolio: portfolioReducer,
    modal: modalReducer,
  },
});
