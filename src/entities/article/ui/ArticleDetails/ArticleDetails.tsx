import { useSelector } from 'react-redux';

import { ReducersList } from '@/app/providers/StoreProvider';

import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { Article } from '../../model/types/article';

import { ArticleDetailsSkeleton } from './ArticleDetailsSkeleton';
import { renderArticleBlock } from './renderBlock';

import s from './ArticleDetails.module.scss';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  articleId: Article['id'];
}

const _ArticleDetails = (props: ArticleDetailsProps) => {
  const { articleId } = props;

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useInitialEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, [articleId]);

  if (isLoading) {
    return <ArticleDetailsSkeleton />;
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Text align="center" title="Произошла ошибка при загрузке статьи." />
        }
        off={
          <TextDeprecated
            align="center"
            title="Произошла ошибка при загрузке статьи."
          />
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text title={article?.title} size="l" bold />
          <Text title={article?.subtitle} />
          <AppImage
            fallback={<Skeleton width="100%" height={420} border="16px" />}
            src={article?.img}
            className={s.img}
          />
          {article?.blocks.map(renderArticleBlock)}
        </>
      }
      off={
        <>
          {article?.img && (
            <Flex justify="center" align="center" max>
              <AvatarDeprecated
                src={article?.img}
                alt="article_image"
                size={200}
              />
            </Flex>
          )}
          <Flex vertical gap="4" max data-testid="ArticleDetails.Info">
            <TextDeprecated
              className={s.title}
              title={article?.title}
              text={article?.subtitle}
              size="size_l"
            />
            <Flex gap="8" align="center">
              <IconDeprecated className={s.icon} Svg={EyeIcon} />
              <TextDeprecated text={String(article?.views)} />
            </Flex>
            <Flex gap="8" align="center">
              <IconDeprecated className={s.icon} Svg={CalendarIcon} />
              <TextDeprecated text={article?.createdAt} />
            </Flex>
          </Flex>
          {article?.blocks.map(renderArticleBlock)}
        </>
      }
    />
  );
};

export const ArticleDetails: typeof _ArticleDetails = (props) => (
  <DynamicModuleLoader reducers={reducers}>
    <Flex vertical gap="16" max className={s.ArticleDetails}>
      <_ArticleDetails {...props} />
    </Flex>
  </DynamicModuleLoader>
);
