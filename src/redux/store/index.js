import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/couterslice"; // Ensure correct import

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
