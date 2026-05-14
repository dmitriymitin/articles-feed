import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getFeedbackFormField } from "../../model/selectors/getFeedbackFormField/getFeedbackFormField";
import { feedbackFormActions } from "../../model/slice/feedbackFormSlice";

import cls from "./FeedbackFormTextarea.module.scss";

interface FeedbackFormTextareaProps {
  className?: string;
}

export const FeedbackFormTextarea = (props: FeedbackFormTextareaProps) => {
  const { className } = props;
  const { t } = useTranslation("about");
  const dispatch = useAppDispatch();
  const value = useSelector(getFeedbackFormField("message"));

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      feedbackFormActions.setInputField({ field: "message", value: e.target.value })
    );
  };

  return (
    <textarea
      className={cls.textarea}
      value={value}
      onChange={onChange}
      placeholder={t("Опишите вашу обратную связь...")}
    />
  );
};