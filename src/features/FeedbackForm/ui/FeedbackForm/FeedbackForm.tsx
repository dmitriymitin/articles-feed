import { memo } from "react";

import { useTranslation } from "react-i18next";

import { ReducersList } from "@/app/providers/StoreProvider";
import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppStore } from "@/shared/lib/hooks/useAppStore/useAppStore";
import { Text } from "@/shared/ui/Text";

import { getFeedbackFormField } from "../../model/selectors/getFeedbackFormField/getFeedbackFormField";
import { feedbackFormActions, feedbackFormReducer } from "../../model/slice/feedbackFormSlice";
import { FeedbackFormEmailInput } from "../FeedbackFormEmailInput/FeedbackFormEmailInput";
import { FeedbackFormSubmitBtn } from "../FeedbackFormSubmitBtn/FeedbackFormSubmitBtn";
import { FeedbackFormTextarea } from "../FeedbackFormTextarea/FeedbackFormTextarea";

import cls from "./FeedbackForm.module.scss";

const initialReducers: ReducersList = {
  feedbackForm: feedbackFormReducer,
};

const FeedbackForm = () => {
  const { t } = useTranslation("about");
  const dispatch = useAppDispatch();
  const store = useAppStore();

  const handleSubmit = () => {
    const state = store.getState();
    const email = getFeedbackFormField("email")(state);
    const message = getFeedbackFormField("message")(state);

    // eslint-disable-next-line no-console
    console.log("Feedback submitted:", { email, message });

    dispatch(feedbackFormActions.reset());
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cls.FeedbackForm}>
        <Text title={t("Обратная связь")} size="size_l" />

        <div className={cls.field}>
          <span className={cls.label}>{t("Ваш email")}</span>
          <div className={cls.inputWrapper}>
            <FeedbackFormEmailInput />
          </div>
        </div>

        <div className={cls.field}>
          <span className={cls.label}>{t("Сообщение")}</span>
          <FeedbackFormTextarea />
        </div>

        <div className={cls.actions}>
          <FeedbackFormSubmitBtn onClick={handleSubmit} />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(FeedbackForm);