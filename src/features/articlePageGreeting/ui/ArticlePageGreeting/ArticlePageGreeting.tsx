import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';

import { isMobile } from '@/shared/lib/deviceDetect/isMobile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { saveJsonSettings, useJsonSettings } from '@/entities/user';

export const ArticlePageGreeting = () => {
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    const isOpen = !isArticlesPageWasOpened;

    const onClose = () => {
        dispatch(saveJsonSettings({
            isArticlesPageWasOpened: true,
        }));
    };

    const text = (
      <Text
        title="Добро пожаловать на страницу статей"
        text="Здесь вы можете искать и просматривать статьи на различные темы"
      />
    );

    if (isMobile()) {
        return (
          <Drawer lazy isOpen={isOpen} onClose={onClose}>
              {text}
          </Drawer>
        );
    }

    return (
      <Modal lazy isOpen={isOpen} onClose={onClose}>
          {text}
      </Modal>
    );
};
