import { SET_SEARCH_RESULTS } from "../actions/search.js";

const initState = [];

export const searchReducer = (search = initState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      let { payload } = action;
      console.log("search action result s= =", action);
      postMessage({ type: SET_SEARCH_RESULTS, payload });
      return payload;
    default:
      return search;
  }
};
