import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../store/contactSlice.js";
import newsletterSlice from "../store/newsletterSlice.js";

export const store = configureStore({
  reducer: {
    contact: contactSlice,
    newsletter: newsletterSlice,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;