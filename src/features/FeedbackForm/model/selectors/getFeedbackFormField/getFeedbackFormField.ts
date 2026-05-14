import { StateSchema } from "@/app/providers/StoreProvider";

import { feedbackFormInitialState } from "../../slice/feedbackFormSlice";
import { FeedbackFormFields } from "../../types/FeedbackFormSchema";

export const getFeedbackFormField =
  (field: keyof FeedbackFormFields) => (state: StateSchema) =>
    state?.feedbackForm?.[field] ?? feedbackFormInitialState[field];