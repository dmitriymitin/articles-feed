
import {
    Button
} from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import { cn } from "@/shared/lib/classNames/classNames";
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';

import { ArticleView } from '@/entities/Article';

import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    view?: ArticleView | null
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { view, onViewClick } = props;

    return (
      <div
        className={s.ArticleViewSelector}
      >
          {viewTypes.map((viewType) => (
            <Button
              key={viewType.view}
              theme='clear'
              onClick={() => onViewClick?.(viewType.view)}
            >
                <Icon
                  width={24}
                  height={24}
                  Svg={viewType.icon}
                  className={cn({
                      [s.notSelected]: viewType.view !== view,
                  })}
                />
            </Button>
          ))}
      </div>
    );
};
