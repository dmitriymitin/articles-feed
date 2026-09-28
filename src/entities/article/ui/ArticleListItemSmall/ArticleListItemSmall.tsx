import React, { HTMLAttributeAnchorTarget } from 'react';

import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { getRouteArticleDetails } from '@/shared/const/router';

import { Article } from '../../model/types/article';

import { ArticleListItemTypes } from '../ArticleListItemTypes/ArticleListItemTypes';
import { ArticleListItemUser } from '../ArticleListItemUser/ArticleListItemUser';
import { ArticleListItemViews } from '../ArticleListItemViews/ArticleListItemViews';

import s from './ArticleListItemSmall.module.scss';

interface ArticleListItemSmallProps {
  article: Article;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItemSmall = (props: ArticleListItemSmallProps) => {
  const { article, className, target } = props;

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          data-testid="ArticleListItem"
          target={target}
          to={getRouteArticleDetails(article.id)}
          className={cn(s.ArticleListItemRedesigned, className)}
        >
          <Card className={s.card} border="partial" padding="0">
            <AppImage
              fallback={<Skeleton width="100%" height={200} />}
              alt={article.title}
              src={article.img}
              className={s.img}
            />
            <Flex vertical className={s.info} gap="4">
              <Text title={article.title} className={s.title} />
              <Flex vertical gap="4" className={s.footer} max>
                <Flex align="center" justify="between" max>
                  <Text text={article.createdAt} className={s.date} />
                  <ArticleListItemViews views={article.views} />
                </Flex>
                <Flex align="center" gap="4">
                  <ArticleListItemUser
                    avatar={article.user.avatar}
                    username={article.user.username}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Card>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          data-testid="ArticleListItem"
          target={target}
          to={getRouteArticleDetails(article.id)}
          className={cn(s.ArticleListItemSmallDeprecated, className)}
        >
          <CardDeprecated>
            <div className={s.imageWrapper}>
              <AppImage
                fallback={<SkeletonDeprecated width={200} height={200} />}
                alt={article.title}
                src={article.img}
                className={s.img}
              />
              <TextDeprecated text={article.createdAt} className={s.date} />
            </div>
            <Flex justify="between" className={s.infoWrapper}>
              <ArticleListItemTypes type={article.type} className={s.types} />
              <ArticleListItemViews views={article.views} className={s.views} />
            </Flex>
            <TextDeprecated text={article.title} className={s.title} />
          </CardDeprecated>
        </AppLinkDeprecated>
      }
    />
  );
};

export default ArticleListItemSmall;
