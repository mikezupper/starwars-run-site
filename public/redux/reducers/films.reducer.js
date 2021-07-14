import { SET_FILMS, FILMS_PUBLISHED } from "../actions/films.js";

const initState = [];

export const filmsReducer = (films = initState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return action.payload;
    case FILMS_PUBLISHED:
      postMessage({ type: FILMS_PUBLISHED, films });
      return films;
    default:
      return films;
  }
};
