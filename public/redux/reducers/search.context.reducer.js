import { SET_SEARCH_CONTEXT } from "../actions/search.context.js";

const initState = [];

export const searchContextReducer = (context = initState, action) => {
  switch (action.type) {
    case SET_SEARCH_CONTEXT:
      console.log("SET_SEARCH_CONTEXT", action?.payload);
      const p = action?.payload;
      return p;
    default:
      return context;
  }
};
