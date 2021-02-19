import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/landing/portfolio/portfolioSlice";
import modalReducer from "../features/modal/modalSlice";
import timelineModalReducer from "../features/landing/timeline/timelineModal/timelineModalSlice";
import alertReducer from "../features/alert/alertSlice";

export default configureStore({
  reducer: {
    portfolio: portfolioReducer,
    modal: modalReducer,
    timelineModal: timelineModalReducer,
    alert: alertReducer,
  },
});
