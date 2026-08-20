import React from "react";

import { AppImage } from "@/shared/ui/AppImage";
import { AppLink } from "@/shared/ui/AppLink";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Text } from "@/shared/ui/Text";

import { getRouteArticleDetails } from "@/shared/const/router";

import { ArticleBlockType } from "../../model/consts/articleConsts";
import { Article, ArticleTextBlock } from "../../model/types/article";

import { ArticleListItemTypes } from "../ArticleListItemTypes/ArticleListItemTypes";
import { ArticleListItemViews } from "../ArticleListItemViews/ArticleListItemViews";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

import s from "./ArticleListItemBig.module.scss";

interface ArticleListItemBigProps {
  article: Pick<
    Article,
    "id" | "img" | "blocks" | "user" | "createdAt" | "title" | "views" | "type"
  >;
  className?: string;
}

const ArticleListItemBig = (props: ArticleListItemBigProps) => {
  const { article, className } = props;
  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT
  ) as ArticleTextBlock;

  return (
    <div data-testid="ArticleListItemBig" className={className}>
      <Card>
        <div className={s.header}>
          <Avatar
            size={30}
            src={article.user.avatar}
            alt={article.user.username}
          />
          <Text text={article.user.username} className={s.username} />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <Text title={article.title} className={s.title} />
        <ArticleListItemTypes type={article.type} />
        <AppImage
          fallback={<Skeleton width="100%" height={250} />}
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
          <AppLink to={getRouteArticleDetails(article.id)}>
            <Button tabIndex={-1} theme="outline">
              Читать далее...
            </Button>
          </AppLink>
          <ArticleListItemViews views={article.views} className={s.views} />
        </div>
      </Card>
    </div>
  );
};

export default ArticleListItemBig;
