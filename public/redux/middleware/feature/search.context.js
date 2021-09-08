import {
  SEARCH_CONTEXT,
  setSearchContext,
  SET_SEARCH_CONTEXT,
} from "../../actions/search.context.js";

export const searchContextMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case SET_SEARCH_CONTEXT:
      console.log("SET_SEARCH_CONTEXT", action);

      next([setSearchContext({ context: action?.payload })]);
      break;
  }
};
