import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import portfolioReducer from "../features/landing/portfolio/portfolioSlice";
import modalReducer from "../features/modal/modalSlice";
import navReducer from "../features/landing/nav/navSlice";
import timelineModalReducer from "../features/landing/timeline/timelineModal/timelineModalSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    portfolio: portfolioReducer,
    modal: modalReducer,
    nav: navReducer,
    timelineModal: timelineModalReducer,
  },
});
