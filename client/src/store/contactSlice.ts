import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiRequest } from "../lib/queryClient";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  revenue: string;
  message: string;
}

interface ContactState {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: string | null;
}

const initialState: ContactState = {
  formData: {
    name: "",
    email: "",
    company: "",
    revenue: "",
    message: "",
  },
  isSubmitting: false,
  submitSuccess: false,
  submitError: null,
};

export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (formData: ContactFormData) => {
    const response = await apiRequest("POST", "/api/contact", formData);
    return await response.json();
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateFormField: (
      state,
      action: PayloadAction<{ field: keyof ContactFormData; value: string }>
    ) => {
      state.formData[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
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
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true;
        state.submitError = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isSubmitting = false;
        state.submitSuccess = true;
        state.formData = initialState.formData;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.submitError = action.error.message || "Failed to submit form";
      });
  },
});

export const { updateFormField, resetForm, clearSubmitStatus } = contactSlice.actions;
export default contactSlice.reducer;
