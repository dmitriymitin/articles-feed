import { useState } from 'react';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { BrowserView, MobileView } from '@/shared/ui/redesigned/DeviceDetect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '@/shared/lib/features';

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder="Ваш отзыв"
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testid="RatingCard.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder="Ваш отзыв"
          />
        </>
      }
    />
  );

  const content = (
    <>
      <Flex vertical align="center" gap="8" max>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={starsCount ? 'Спасибо за оценку!' : title} />}
          off={
            <TextDeprecated title={starsCount ? 'Спасибо за оценку!' : title} />
          }
        />
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
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Flex align="center" max gap="16" justify="end">
                  <Button data-testid="RatingCard.Close" onClick={cancel}>
                    Закрыть
                  </Button>
                  <Button data-testid="RatingCard.Send" onClick={accept}>
                    Отправить
                  </Button>
                </Flex>
              }
              off={
                <Flex align="center" max gap="16" justify="end">
                  <ButtonDeprecated
                    data-testid="RatingCard.Close"
                    onClick={cancel}
                    theme="outline_red"
                  >
                    Закрыть
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid="RatingCard.Send"
                    onClick={accept}
                  >
                    Отправить
                  </ButtonDeprecated>
                </Flex>
              }
            />
          </Flex>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancel}>
          <Flex vertical gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Button fullWidth onClick={accept} size="l">
                  Отправить
                </Button>
              }
              off={
                <ButtonDeprecated fullWidth onClick={accept} size="l">
                  Отправить
                </ButtonDeprecated>
              }
            />
          </Flex>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card fullWidth border="partial" padding="24">
          {content}
        </Card>
      }
      off={
        <CardDeprecated className={className} max data-testid="RatingCard">
          {content}
        </CardDeprecated>
      }
    />
  );
};
