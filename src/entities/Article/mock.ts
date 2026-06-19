import { articleRecommendationsListLimit } from './model/consts/articleRecomadationsConst'
import {
  articleTestData1,
  articleTestData2,
  articleTestData3,
} from './testing';

export const recommendationsStoryMockFetch = {
  url: `${__API__}/articles?_limit=${articleRecommendationsListLimit}&_expand=user`,
  method: 'GET',
  status: 200,
  response: [
    articleTestData1,
    articleTestData2,
    articleTestData3,
  ],
}
