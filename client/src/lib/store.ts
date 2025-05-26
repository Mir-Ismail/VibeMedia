import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../store/contactSlice";
import newsletterReducer from "../store/newsletterSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    newsletter: newsletterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
