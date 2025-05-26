import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../lib/queryClient.js";

const initialState = {
  email: "",
  isSubmitting: false,
  submitSuccess: false,
  submitError: null,
};

export const subscribeNewsletter = createAsyncThunk(
  "newsletter/subscribe",
  async (email) => {
    const response = await apiRequest("/newsletter", {
      method: "POST",
      body: { email },
    });
    return response;
  }
);

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    resetNewsletter: (state) => {
      state.email = "";
      state.submitSuccess = false;
      state.submitError = null;
    },
    clearSubmitStatus: (state) => {
      state.submitSuccess = false;
      state.submitError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscribeNewsletter.pending, (state) => {
        state.isSubmitting = true;
        state.submitError = null;
      })
      .addCase(subscribeNewsletter.fulfilled, (state) => {
        state.isSubmitting = false;
        state.submitSuccess = true;
        state.email = "";
      })
      .addCase(subscribeNewsletter.rejected, (state, action) => {
        state.isSubmitting = false;
        state.submitError = action.error.message || "Failed to subscribe";
      });
  },
});

export const { updateEmail, resetNewsletter, clearSubmitStatus } = newsletterSlice.actions;
export default newsletterSlice.reducer;