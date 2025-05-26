export { store } from "../lib/store";
export type { RootState, AppDispatch } from "../lib/store";

// Re-export all action creators for easy importing
export {
  updateFormField,
  resetForm,
  clearSubmitStatus,
  submitContactForm,
} from "./contactSlice";

export {
  updateEmail,
  resetNewsletter,
  subscribeNewsletter,
} from "./newsletterSlice";

// Re-export types
export type { ContactFormData } from "./contactSlice";
