import { Map } from "immutable";

import {
  GET_CATALOG_START,
  GET_CATALOG_ERROR,
  GET_CATALOG_SUCCESS,
} from "./actions";

const initialState = Map({
  loading: false,
  error: null,
  catalog: null,
});

const actionsMap = {
  // Async action
  [GET_CATALOG_START]: state => {
    return state.merge(
      Map({
        loading: true,
        error: null,
        catalog: null,
      }),
    );
  },
  [GET_CATALOG_ERROR]: (state, action) => {
    return state.merge(
      Map({
        loading: false,
        error: action.error.message,
      }),
    );
  },
  [GET_CATALOG_SUCCESS]: (state, action) => {
    return state.merge(
      Map({
        loading: false,
        catalog: action.data,
      }),
    );
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
