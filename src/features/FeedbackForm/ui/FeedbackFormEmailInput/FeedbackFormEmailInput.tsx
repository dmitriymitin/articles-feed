import { useSelector } from "react-redux";

import { Input } from "@/shared/ui/Input";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getFeedbackFormField } from "../../model/selectors/getFeedbackFormField/getFeedbackFormField";
import { feedbackFormActions } from "../../model/slice/feedbackFormSlice";

interface FeedbackFormEmailInputProps {
  className?: string;
}

export const FeedbackFormEmailInput = (props: FeedbackFormEmailInputProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const value = useSelector(getFeedbackFormField("email"));

  const onChange = (value: string) => {
    dispatch(feedbackFormActions.setInputField({ field: "email", value }));
  };

  return (
    <Input
      type="email"
      className={className}
      value={value}
      onChange={onChange}
      placeholder="example@mail.com"
    />
  );
};