import { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Drawer } from "@/shared/ui/Drawer";
import { Flex } from "@/shared/ui/Flex";
import { Input } from "@/shared/ui/Input";
import { Modal } from "@/shared/ui/Modal";
import { StarRating } from "@/shared/ui/StarRating";
import { Text } from "@/shared/ui/Text";
import { Trans } from "@/shared/ui/Translate";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = (props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = (selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  };

  const acceptHandle = () => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  };

  const cancelHandle = () => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  };

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        data-testid="RatingCard.Input"
        value={feedback}
        onChange={setFeedback}
        placeholder="Ваш отзыв"
      />
    </>
  );

  const content = (
    <>
      <Flex vertical align="center" gap="8" max>
        <Text title={starsCount ? "Спасибо за оценку!" : title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </Flex>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <Flex vertical max gap="32">
            {modalContent}
            <Flex align="center" max gap="16" justify="end">
              <Button
                data-testid="RatingCard.Close"
                onClick={cancelHandle}
                theme="outline_red"
              >
                <Trans>Закрыть</Trans>
              </Button>
              <Button data-testid="RatingCard.Send" onClick={acceptHandle}>
                <Trans>Отправить</Trans>
              </Button>
            </Flex>
          </Flex>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <Flex vertical gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandle} size="l">
              <Trans>Отправить</Trans>
            </Button>
          </Flex>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <Card className={className} max data-testid="RatingCard">
      {content}
    </Card>
  );
};
