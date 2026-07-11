import { useSelector } from "react-redux";

import { AppLink } from "@/shared/ui/AppLink";
import { Button } from "@/shared/ui/Button";
import { Flex } from "@/shared/ui/Flex";

import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";

import { Article } from "@/entities/Article";

import { getCanEditArticle } from "../../model/selectors/article/article";

interface ArticleDetailsPageHeaderProps {
  articleId: Article["id"];
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps
) => {
  const { articleId } = props;

  const canEdit = useSelector(getCanEditArticle);

  return (
    <Flex max align="center" justify="between">
      <AppLink to={getRouteArticles()}>
        <Button theme="outline" tabIndex={-1}>
          Назад к списку
        </Button>
      </AppLink>
      {canEdit && (
        <AppLink to={getRouteArticleEdit(articleId)}>
          <Button theme="outline" tabIndex={-1}>
            Редактировать
          </Button>
        </AppLink>
      )}
    </Flex>
  );
};
