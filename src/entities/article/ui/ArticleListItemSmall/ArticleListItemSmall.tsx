import React, { HTMLAttributeAnchorTarget } from "react";

import { AppImage } from "@/shared/ui/AppImage";
import { AppLink } from "@/shared/ui/AppLink";
import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Text } from "@/shared/ui/Text";

import { cn } from "@/shared/lib/classNames/classNames";
import { getRouteArticleDetails } from "@/shared/const/router";

import { Article } from "../../model/types/article";

import { ArticleListItemTypes } from "../ArticleListItemTypes/ArticleListItemTypes";
import { ArticleListItemViews } from "../ArticleListItemViews/ArticleListItemViews";

import s from "./ArticleListItemSmall.module.scss";

interface ArticleListItemSmallProps {
  article: Pick<
    Article,
    "id" | "title" | "img" | "createdAt" | "type" | "views"
  >;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

const ArticleListItemSmall = (props: ArticleListItemSmallProps) => {
  const { article, className, target } = props;

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={cn(s.ArticleListItemSmall, className)}
    >
      <Card className={s.card}>
        <div className={s.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            alt={article.title}
            src={article.img}
            className={s.img}
          />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <Flex justify="between" className={s.infoWrapper}>
          <ArticleListItemTypes type={article.type} />
          <ArticleListItemViews views={article.views} />
        </Flex>
        <Text text={article.title} className={s.title} />
      </Card>
    </AppLink>
  );
};

export default ArticleListItemSmall;
