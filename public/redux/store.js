import "https://cdnjs.cloudflare.com/ajax/libs/redux/4.1.0/redux.min.js";
import { searchReducer } from "./reducers/search.reducer.js";
import { searchMiddleware } from "./middleware/feature/search.js";
import { actionSplitterMiddleware } from "./middleware/core/actionSplitter.js";
import { apiMiddleware } from "./middleware/core/api.js";
import { normalizeMiddleware } from "./middleware/core/normalize.js";
import { notificationMiddleware } from "./middleware/core/notification.js";
import { loggerMiddleware } from "./middleware/core/logger.js";
import { uiReducer } from "./reducers/ui.reducer.js";
import { notificationsReducer } from "./reducers/notification.reducer.js";

// shape the state structure
const rootReducer = Redux.combineReducers({
  search: searchReducer,
  ui: uiReducer,
  notification: notificationsReducer,
});

// create the feature middleware array
const featureMiddleware = [searchMiddleware];

// create the core middleware array
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  normalizeMiddleware,
  notificationMiddleware,
  loggerMiddleware,
];

// compose the middleware with additional (optional) enhancers,
// DevTools.instrument() will enable dev tools integration
const enhancer = Redux.compose(
  Redux.applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

// create and configure the store
export const store = Redux.createStore(rootReducer, {}, enhancer);
