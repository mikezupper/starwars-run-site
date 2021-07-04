import { API_REQUEST, apiError, apiSuccess } from "../../actions/api.js";

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {
      const { body, url, method, feature } = action.meta;
      const { context } = action;
      fetch(url, { body, method })
        .then((response) => response.json())
        .then((response) => {
          dispatch(apiSuccess({ response, feature, context }));
        })
        .catch((error) => dispatch(apiError({ error: error, feature })));
    }
  };
