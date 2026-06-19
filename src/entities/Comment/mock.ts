import {
  commentTestData,
  commentTestData2,
  commentTestData3,
} from './testing';

export const commentsStoryMockFetch = {
  url: `${__API__}/comments?_expand=user`,
  method: 'GET',
  status: 200,
  response: [
    commentTestData,
    commentTestData2,
    commentTestData3,
  ],
}
