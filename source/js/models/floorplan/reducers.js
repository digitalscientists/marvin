
import { Map } from 'immutable';

import {
  GET_FLOORPLAN_START,
  GET_FLOORPLAN_ERROR,
  GET_FLOORPLAN_SUCCESS,
} from './actions';

const initialState = Map({
  loading: false,
  error: null,
  floorplan: null,
});

const actionsMap = {
  // Async action
  [GET_FLOORPLAN_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      floorplan: null,
    }));
  },
  [GET_FLOORPLAN_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_FLOORPLAN_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      floorplan: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
