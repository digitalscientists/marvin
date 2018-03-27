
import { Map } from 'immutable';

import {
  GET_INVOICE_START,
  GET_INVOICE_ERROR,
  GET_INVOICE_SUCCESS,
} from './actions';

const initialState = Map({
  loading: false,
  error: null,
  invoice: null,
});

const actionsMap = {
  // Async action
  [GET_INVOICE_START]: (state) => {
    return state.merge(Map({
      loading: true,
      error: null,
      invoice: null,
    }));
  },
  [GET_INVOICE_ERROR]: (state, action) => {
    return state.merge(Map({
      loading: false,
      error: action.error.message,
    }));
  },
  [GET_INVOICE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loading: false,
      invoice: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
