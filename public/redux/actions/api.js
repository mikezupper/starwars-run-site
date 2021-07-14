// action types
export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

// action creators
export const apiRequest = ({ body, method, url, feature, context }) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature },
  context,
});

export const apiSuccess = ({ response, feature, context }) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature },
  context,
});

export const apiError = ({ error, feature }) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
