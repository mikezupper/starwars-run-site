import { SET_STARSHIPS, STARSHIPS_PUBLISHED } from "../actions/starships.js";

const initState = [];

export const starshipsReducer = (starships = initState, action) => {
  switch (action.type) {
    case SET_STARSHIPS:
      return action.payload;
    case STARSHIPS_PUBLISHED:
      postMessage({ type: STARSHIPS_PUBLISHED, starships });
      return starships;
    default:
      return starships;
  }
};
