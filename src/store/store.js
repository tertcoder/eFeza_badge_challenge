import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "../features/formDataSlice";
import progressReducer from "../features/progressSlice";

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
    progress: progressReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
