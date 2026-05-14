import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";

import { FeedbackFormFields, FeedbackFormSchema } from "../types/FeedbackFormSchema";

export const feedbackFormInitialState: FeedbackFormSchema = {
  email: "",
  message: "",
};

export const feedbackFormSlice = createSlice({
  name: "feedbackForm" as keyof StateSchema,
  initialState: feedbackFormInitialState,
  reducers: {
    setInputField: (
      state,
      action: PayloadAction<{ field: keyof FeedbackFormFields; value: string }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    reset: () => feedbackFormInitialState,
  },
});

export const { actions: feedbackFormActions } = feedbackFormSlice;
export const { reducer: feedbackFormReducer } = feedbackFormSlice;