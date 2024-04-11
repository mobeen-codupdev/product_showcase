import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../pages/Home/reducer";
import getProductReducer from "../pages/SearchResults/reducer";

export const store = configureStore({
  reducer: {
    userReducer,
    getProductReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
