import { useSelector } from "react-redux";

import { Button, ButtonProps } from "@/shared/ui/Button";
import { Trans } from "@/shared/ui/Translate";

import { getFeedbackFormCanSubmit } from "../../model/selectors/getFeedbackFormCanSubmit/getFeedbackFormCanSubmit";

interface FeedbackFormSubmitBtnProps
  extends Pick<ButtonProps, "className" | "onClick"> {}

export const FeedbackFormSubmitBtn = (props: FeedbackFormSubmitBtnProps) => {
  const { className, onClick } = props;
  const canSubmit = useSelector(getFeedbackFormCanSubmit);

  return (
    <Button
      theme="backgroundInverted"
      size="l"
      disabled={!canSubmit}
      onClick={onClick}
      className={className}
    >
      <Trans ns="about">Отправить</Trans>
    </Button>
  );
};