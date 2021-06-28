import { BOOKS_PUBLISHED, SET_BOOKS } from "../actions/books.js";

const initState = [];

export const booksReducer = (books = initState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.payload;
    case BOOKS_PUBLISHED:
      postMessage({ type: BOOKS_PUBLISHED, books });
      return books;
    default:
      return books;
  }
};
