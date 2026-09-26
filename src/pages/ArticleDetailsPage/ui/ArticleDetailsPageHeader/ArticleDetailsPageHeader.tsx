import { useSelector } from 'react-redux';

import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

import { Article } from '@/entities/article';

import { getCanEditArticle } from '../../model/selectors/article/article';

interface ArticleDetailsPageHeaderProps {
  articleId: Article['id'];
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps,
) => {
  const { articleId } = props;

  const canEdit = useSelector(getCanEditArticle);

  return (
    <Flex max align="center" justify="between">
      <AppLinkDeprecated to={getRouteArticles()}>
        <ButtonDeprecated theme="outline" tabIndex={-1}>
          Назад к списку
        </ButtonDeprecated>
      </AppLinkDeprecated>
      {canEdit && (
        <AppLinkDeprecated to={getRouteArticleEdit(articleId)}>
          <ButtonDeprecated theme="outline" tabIndex={-1}>
            Редактировать
          </ButtonDeprecated>
        </AppLinkDeprecated>
      )}
    </Flex>
  );
};
