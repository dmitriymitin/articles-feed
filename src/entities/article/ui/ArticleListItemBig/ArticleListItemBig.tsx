import React, { HTMLAttributeAnchorTarget } from 'react';

import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '@/shared/lib/features';
import { getRouteArticleDetails } from '@/shared/const/router';

import { cn } from '../../../../shared/lib/classNames/classNames';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import { Article, ArticleTextBlock } from '../../model/types/article';

import { ArticleListItemTypes } from '../ArticleListItemTypes/ArticleListItemTypes';
import { ArticleListItemUser } from '../ArticleListItemUser/ArticleListItemUser';
import { ArticleListItemViews } from '../ArticleListItemViews/ArticleListItemViews';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import s from './ArticleListItemBig.module.scss';

interface ArticleListItemBigProps {
  article: Article;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItemBig = (props: ArticleListItemBigProps) => {
  const { article, className, target } = props;
  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ) as ArticleTextBlock;

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          padding="24"
          max
          data-testid="ArticleListItem"
          className={cn(s.ArticleListItemBigRedesigned, className)}
        >
          <Flex vertical max gap="16">
            <Flex align="center" gap="8" max>
              <ArticleListItemUser
                avatar={article.user.avatar}
                username={article.user.username}
              />
              <Text text={article.createdAt} />
            </Flex>
            <Text title={article.title} bold />
            <Text title={article.subtitle} size="s" />
            <AppImage
              fallback={<Skeleton width="100%" height={250} />}
              src={article.img}
              className={s.img}
              alt={article.title}
            />
            {textBlock?.paragraphs && (
              <Text
                className={s.textBlock}
                text={textBlock.paragraphs.slice(0, 2).join(' ')}
              />
            )}
            <Flex align="center" max justify="between">
              <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                <Button variant="outline">Читать далее...</Button>
              </AppLink>
              <ArticleListItemViews views={article.views} className={s.views} />
            </Flex>
          </Flex>
        </Card>
      }
      off={
        <div
          data-testid="ArticleListItemBig"
          className={cn(s.ArticleListItemBigDeprecated, className)}
        >
          <CardDeprecated>
            <div className={s.header}>
              <AvatarDeprecated
                size={30}
                src={article.user.avatar}
                alt={article.user.username}
              />
              <TextDeprecated
                text={article.user.username}
                className={s.username}
              />
              <TextDeprecated text={article.createdAt} className={s.date} />
            </div>
            <TextDeprecated title={article.title} className={s.title} />
            <ArticleListItemTypes type={article.type} />
            <AppImage
              fallback={<SkeletonDeprecated width="100%" height={250} />}
              src={article.img}
              className={s.img}
              alt={article.title}
            />
            {textBlock && (
              <ArticleTextBlockComponent
                block={textBlock}
                className={s.textBlock}
              />
            )}
            <div className={s.footer}>
              <AppLinkDeprecated to={getRouteArticleDetails(article.id)}>
                <ButtonDeprecated tabIndex={-1} theme="outline">
                  Читать далее...
                </ButtonDeprecated>
              </AppLinkDeprecated>
              <ArticleListItemViews views={article.views} className={s.views} />
            </div>
          </CardDeprecated>
        </div>
      }
    />
  );
};

export default ArticleListItemBig;
