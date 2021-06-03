import { configureStore } from "@reduxjs/toolkit";
import bankingReducer from "./bankingSlice";

const store = configureStore({
  reducer: {
    bankingReducer: bankingReducer,
  },
});

export default store;
