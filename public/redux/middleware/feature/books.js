import {
  BOOKS,
  FETCH_BOOKS,
  SET_BOOKS,
  fetchBooks,
  setBooks,
  BOOKS_PUBLISHED,
  publishBooks,
} from "../../actions/books.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";
import { setLoader } from "../../actions/ui.js";
import { setNotification } from "../../actions/notification.js";

const BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export const booksMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_BOOKS:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: BOOKS_URL + action?.payload?.data,
          feature: BOOKS,
        }),
        setLoader({ state: true, feature: BOOKS }),
      ]);
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next([
        setBooks({ books: action.payload.items, normalizeKey: "id" }),
        setLoader({ state: false, feature: BOOKS }),
        publishBooks({ books: action.payload.items }),
      ]);
      break;

    case `${BOOKS} ${API_ERROR}`:
      next([
        setNotification({ message: action.payload.message, feature: BOOKS }),
        setLoader({ state: false, feature: BOOKS }),
      ]);
      break;
  }
};
