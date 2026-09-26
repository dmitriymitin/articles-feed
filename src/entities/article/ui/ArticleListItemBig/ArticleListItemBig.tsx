import React from 'react';

import { AppImage as AppImageDeprecated } from '@/shared/ui/deprecated/AppImage';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

import { getRouteArticleDetails } from '@/shared/const/router';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import { Article, ArticleTextBlock } from '../../model/types/article';

import { ArticleListItemTypes } from '../ArticleListItemTypes/ArticleListItemTypes';
import { ArticleListItemViews } from '../ArticleListItemViews/ArticleListItemViews';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import s from './ArticleListItemBig.module.scss';

interface ArticleListItemBigProps {
  article: Pick<
    Article,
    'id' | 'img' | 'blocks' | 'user' | 'createdAt' | 'title' | 'views' | 'type'
  >;
  className?: string;
}

const ArticleListItemBig = (props: ArticleListItemBigProps) => {
  const { article, className } = props;
  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ) as ArticleTextBlock;

  return (
    <div data-testid="ArticleListItemBig" className={className}>
      <CardDeprecated>
        <div className={s.header}>
          <AvatarDeprecated
            size={30}
            src={article.user.avatar}
            alt={article.user.username}
          />
          <TextDeprecated text={article.user.username} className={s.username} />
          <TextDeprecated text={article.createdAt} className={s.date} />
        </div>
        <TextDeprecated title={article.title} className={s.title} />
        <ArticleListItemTypes type={article.type} />
        <AppImageDeprecated
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
  );
};

export default ArticleListItemBig;
