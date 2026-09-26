import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Flex } from '@/shared/ui/Flex';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';

import { ArticleView } from '@/entities/article';

import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  view?: ArticleView | null;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card className={s.ArticleViewSelectorRedesigned} border="round">
          <Flex gap="8">
            {viewTypes.map((viewType) => (
              <Icon
                clickable
                key={viewType.view}
                onClick={onClick(viewType.view)}
                Svg={viewType.icon}
                className={cn({
                  [s.notSelected]: viewType.view !== view,
                })}
              />
            ))}
          </Flex>
        </Card>
      }
      off={
        <div className={s.ArticleViewSelector}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme="clear"
              onClick={() => onViewClick?.(viewType.view)}
            >
              <IconDeprecated
                width={24}
                height={24}
                Svg={viewType.icon}
                className={cn({
                  [s.notSelected]: viewType.view !== view,
                })}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
};
