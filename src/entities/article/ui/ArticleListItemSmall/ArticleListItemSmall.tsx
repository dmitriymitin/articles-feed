import React, { HTMLAttributeAnchorTarget } from 'react';

import { AppImage as AppImageDeprecated } from '@/shared/ui/deprecated/AppImage';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { cn } from '@/shared/lib/classNames/classNames';
import { getRouteArticleDetails } from '@/shared/const/router';

import { Article } from '../../model/types/article';

import { ArticleListItemTypes } from '../ArticleListItemTypes/ArticleListItemTypes';
import { ArticleListItemViews } from '../ArticleListItemViews/ArticleListItemViews';

import s from './ArticleListItemSmall.module.scss';

interface ArticleListItemSmallProps {
  article: Pick<
    Article,
    'id' | 'title' | 'img' | 'createdAt' | 'type' | 'views'
  >;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItemSmall = (props: ArticleListItemSmallProps) => {
  const { article, className, target } = props;

  return (
    <AppLinkDeprecated
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={cn(s.ArticleListItemSmall, className)}
    >
      <CardDeprecated className={s.card}>
        <div className={s.imageWrapper}>
          <AppImageDeprecated
            fallback={<SkeletonDeprecated width={200} height={200} />}
            alt={article.title}
            src={article.img}
            className={s.img}
          />
          <TextDeprecated text={article.createdAt} className={s.date} />
        </div>
        <Flex justify="between" className={s.infoWrapper}>
          <ArticleListItemTypes type={article.type} />
          <ArticleListItemViews views={article.views} />
        </Flex>
        <TextDeprecated text={article.title} className={s.title} />
      </CardDeprecated>
    </AppLinkDeprecated>
  );
};

export default ArticleListItemSmall;
