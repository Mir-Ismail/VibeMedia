import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiRequest } from "../lib/queryClient";

interface NewsletterState {
  email: string;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: string | null;
}

const initialState: NewsletterState = {
  email: "",
  isSubmitting: false,
  submitSuccess: false,
  submitError: null,
};

export const subscribeNewsletter = createAsyncThunk(
  "newsletter/subscribe",
  async (email: string) => {
    const response = await apiRequest("POST", "/api/newsletter", { email });
    return await response.json();
  }
);

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    resetNewsletter: (state) => {
      state.email = "";
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

export const { updateEmail, resetNewsletter } = newsletterSlice.actions;
export default newsletterSlice.reducer;
