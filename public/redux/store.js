import "https://cdnjs.cloudflare.com/ajax/libs/redux/4.1.0/redux.min.js";

import { searchReducer } from "./reducers/search.reducer.js";
import { searchMiddleware } from "./middleware/feature/search.js";

import { filmsReducer } from "./reducers/films.reducer.js";
import { filmsMiddleware } from "./middleware/feature/films.js";

import { starshipsMiddleware } from "./middleware/feature/starships.js";
import { starshipsReducer } from "./reducers/starships.reducer.js";

import { vehiclesMiddleware } from "./middleware/feature/vehicles.js";
import { vehiclesReducer } from "./reducers/vehicles.reducer.js";

import { planetsMiddleware } from "./middleware/feature/planets.js";
import { planetsReducer } from "./reducers/planets.reducer.js";

import { speciesMiddleware } from "./middleware/feature/species.js";
import { speciesReducer } from "./reducers/species.reducer.js";

import { peopleMiddleware } from "./middleware/feature/people.js";
import { peopleReducer } from "./reducers/people.reducer.js";

import { actionSplitterMiddleware } from "./middleware/core/actionSplitter.js";
import { apiMiddleware } from "./middleware/core/api.js";
import { loggerMiddleware } from "./middleware/core/logger.js";

// shape the state structure
const rootReducer = Redux.combineReducers({
  search: searchReducer,
  films: filmsReducer,
  vehicles: vehiclesReducer,
  people: peopleReducer,
  starships: starshipsReducer,
  planets: planetsReducer,
  species: speciesReducer,
});

// create the feature middleware array
const featureMiddleware = [
  searchMiddleware,
  peopleMiddleware,
  starshipsMiddleware,
  vehiclesMiddleware,
  planetsMiddleware,
  speciesMiddleware,
  filmsMiddleware,
];

// create the core middleware array
const coreMiddleware = [
  actionSplitterMiddleware,
  apiMiddleware,
  // loggerMiddleware,
];

// compose the middleware with additional (optional) enhancers,
// DevTools.instrument() will enable dev tools integration
const enhancer = Redux.compose(
  Redux.applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

// create and configure the store
export const store = Redux.createStore(rootReducer, {}, enhancer);
