import { useSelector } from "react-redux";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Text } from "@/shared/ui/Text";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { Article } from "../../model/types/article";

import { ArticleDetailsSkeleton } from "./ArticleDetailsSkeleton";

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

interface ArticleDetailsProps {
  id: Article['id']
}

const _ArticleDetails = (props: ArticleDetailsProps) => {
  const { id } = props

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id))
    }
  }, [id])

  if (true) {
    return <ArticleDetailsSkeleton />;
  }

  if (error) {
    return (
      <Text
        align='center'
        title='Произошла ошибка при загрузке статьи.'
      />
    )
  }

  return (
    <>ArticleDetails</>
  );
};

export const ArticleDetails: typeof _ArticleDetails = (props) => (
  <DynamicModuleLoader reducers={reducers}>
    <_ArticleDetails {...props} />
  </DynamicModuleLoader>
)
