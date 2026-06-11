import { ArticleBlockType, ArticleType } from "./model/consts/articleConsts";
import { Article } from "./model/types/article";

export { articleDetailsReducer } from "./model/slice/articleDetailsSlice";

export const articleDetailsTestData: Article = {
  id: '123',
  title: 'title',
  user: {
    id: '123',
    username: 'user',
  },
  subtitle: 'subtitle',
  img: 'img',
  views: 2,
  createdAt: 'createdAt',
  type: [ArticleType.ECONOMICS],
  blocks: [{
    id: '123',
    type: ArticleBlockType.CODE,
    code: '123'
  }]
};
