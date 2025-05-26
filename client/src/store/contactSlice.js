import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../lib/queryClient.js";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  revenue: "",
  message: "",
};

const initialState = {
  formData: initialFormData,
  isSubmitting: false,
  submitSuccess: false,
  submitError: null,
};

export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (formData) => {
    const response = await apiRequest("/contact", {
      method: "POST",
      body: formData,
    });
    return response;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = initialFormData;
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
        state.formData = initialFormData;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.submitError = action.error.message || "Failed to submit form";
      });
  },
});

export const { updateFormField, resetForm, clearSubmitStatus } = contactSlice.actions;
export default contactSlice.reducer;