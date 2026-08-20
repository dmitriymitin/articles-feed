export const articlesStoryMockFetch = ({ rate }) => ({
  url: `${__API__}/article-ratings?userId=1&articleId=1`,
  method: "GET",
  status: 200,
  response: [
    {
      rate,
    },
  ],
});
