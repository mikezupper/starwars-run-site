import { SET_SEARCH_RESULTS } from "../actions/search.js";

const initState = [];

export const searchReducer = (search = initState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      const { payload, context } = action;
      const resp = { ...payload, ...context };
      postMessage({ type: SET_SEARCH_RESULTS, payload: resp });
      return payload;
    default:
      return search;
  }
};
