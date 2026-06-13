import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleBlock } from '../../model/types/article';

import { ArticleDetailsCode } from '../ArticleDetailsCode/ArticleDetailsCode';
import { ArticleDetailsImage } from '../ArticleDetailsImage/ArticleDetailsImage';
import { ArticleDetailsText } from '../ArticleDetailsText/ArticleDetailsText';


export const renderArticleBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleDetailsCode key={block.id} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleDetailsImage key={block.id} block={block} />;
    case ArticleBlockType.TEXT:
      return <ArticleDetailsText key={block.id} block={block} />;
    default:
      return null;
  }
};
