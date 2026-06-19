import { Comment } from "./model/types/comment";

export const commentTestData: Comment = {
  id: '1',
  text: 'hello world',
  user: { id: '1', username: 'Vasya' },
}

export const commentTestData2: Comment = {
  id: '2',
  text: 'hello world 2',
  user: { id: '2', username: 'Vasya2' },
}

export const commentTestData3: Comment = {
  id: '3',
  text: 'hello world 3',
  user: { id: '3', username: 'Vasya3' },
}
