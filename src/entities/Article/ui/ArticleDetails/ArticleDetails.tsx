import { useSelector } from "react-redux";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'

import { Article } from '../..';

import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';
import { renderArticleBlock } from './renderBlock';

import s from './ArticleDetails.module.scss'

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

interface ArticleDetailsProps {
  articleId: Article['id']
}

const _ArticleDetails = (props: ArticleDetailsProps) => {
  const { articleId } = props

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => {
    dispatch(fetchArticleById(articleId))
  }, [articleId])

  if (isLoading) {
    return <ArticleDetailsSkeleton />
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
    <>
      {article?.img && (
        <Flex justify='center' align='center' max>
          <Avatar src={article?.img} alt='article_image' size={200} />
        </Flex>
      )}
      <Flex vertical gap='4' max data-testid="ArticleDetails.Info">
        <Text
          className={s.title}
          title={article?.title}
          text={article?.subtitle}
          size='size_l'
        />
        <Flex gap='8' align='center'>
          <Icon className={s.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </Flex>
        <Flex gap='8' align='center'>
          <Icon className={s.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </Flex>
      </Flex>
      {article?.blocks.map(renderArticleBlock)}
    </>
  )
};

export const ArticleDetails: typeof _ArticleDetails = (props) => (
  <DynamicModuleLoader reducers={reducers}>
    <Flex vertical gap='16' max className={s.ArticleDetails}>
      <_ArticleDetails {...props} />
    </Flex>
   </DynamicModuleLoader>
)
