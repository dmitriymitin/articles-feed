import { useState } from 'react';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { BrowserView, MobileView } from '@/shared/ui/redesigned/DeviceDetect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Modal } from '@/shared/ui/redesigned/Modal';

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
  const [feedback, setFeedback] = useState('');

  const onSelectStars = (selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  };

  const accept = () => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  };

  const cancel = () => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  };

  const modalContent = (
    <>
      <TextDeprecated title={feedbackTitle} />
      <InputDeprecated
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
        <TextDeprecated title={starsCount ? 'Спасибо за оценку!' : title} />
        <StarRatingDeprecated
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
              <ButtonDeprecated
                data-testid="RatingCard.Close"
                onClick={cancel}
                theme="outline_red"
              >
                Закрыть
              </ButtonDeprecated>
              <ButtonDeprecated data-testid="RatingCard.Send" onClick={accept}>
                Отправить
              </ButtonDeprecated>
            </Flex>
          </Flex>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancel}>
          <Flex vertical gap="32">
            {modalContent}
            <ButtonDeprecated fullWidth onClick={accept} size="l">
              Отправить
            </ButtonDeprecated>
          </Flex>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <CardDeprecated className={className} max data-testid="RatingCard">
      {content}
    </CardDeprecated>
  );
};
