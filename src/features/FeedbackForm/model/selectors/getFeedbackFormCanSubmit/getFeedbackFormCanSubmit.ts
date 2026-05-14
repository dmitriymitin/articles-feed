import { StateSchema } from "@/app/providers/StoreProvider";

export const getFeedbackFormCanSubmit = (state: StateSchema) =>
  Boolean(state?.feedbackForm?.email && state?.feedbackForm?.message);