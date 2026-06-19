import { FC, lazy } from 'react'

import { AddArticleCommentProps  } from './AddArticleComment';

export const AddArticleCommentAsync = lazy<FC<AddArticleCommentProps>>(
    () => import("./AddArticleComment"),
);
