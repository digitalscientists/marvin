import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "dev/logger";

import createHistory from 'history/createBrowserHistory'
import transit from "transit-immutable-js";

import rootSaga from "models/sagas-index";
import rootReducer from "models/reducers-index";

import {routerMiddleware, routerReducer} from 'react-router-redux'
const history = createHistory()

const IS_PRODUCTION = process.env.NODE_ENV === "production";

let initialState = {};

// Remove if you are not using server rendering
try {
  // If state exists we need to parse it to JS object
  initialState = transit.fromJSON(__MARVIN_DEHYDRATED_STATE); // eslint-disable-line no-undef
} catch (e) {
  // ★★ Marvin: No dehydrated state
}

// Creating store
// Remove "serverSagas" and "sagaOptions" params
// if you are not using server rendering
export default (serverSagas = null, sagaOptions = {}) => {
  let store = null;
  let middleware = null;

  const sagaMiddleware = createSagaMiddleware();
  const routerReduxMiddleware= routerMiddleware(history)

  if (IS_PRODUCTION) {
    // In production we are adding only sagas middleware
    middleware = applyMiddleware(sagaMiddleware, routerReduxMiddleware);
  } else {
    // In development mode beside sagaMiddleware
    // logger and DevTools are added
    middleware = applyMiddleware(sagaMiddleware, routerReduxMiddleware, logger);

    // Enable DevTools if browser extension is installed
    if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
      // eslint-disable-line
      middleware = compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
      );
    }
  }

  // Create store
  // with initial state if it exists
  store = createStore(rootReducer, initialState, middleware);

  // Server render
  // Remove if you are not using server rendering
  if (serverSagas) {
    // Start server sagas
    const tasks = serverSagas.map(saga =>
      sagaMiddleware.run(saga, sagaOptions),
    );

    // Return both store and tasks
    return {
      tasks,
      store,
    };
  }

  // Run root saga
  sagaMiddleware.run(rootSaga);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept("../models/reducers-index", () => {
      const nextRootReducer = require("../models/reducers-index").default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  // Return store only
  // But as an object for consistency
  return {
    store,
    history
  };
};
