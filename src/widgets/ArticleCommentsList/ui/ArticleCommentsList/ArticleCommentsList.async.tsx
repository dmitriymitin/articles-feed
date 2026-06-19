import { FC, lazy } from 'react'

import { ArticleCommentsListProps  } from './ArticleCommentsList';

export const ArticleCommentsListAsync = lazy<FC<ArticleCommentsListProps>>(
  () => import("./ArticleCommentsList"),
);
