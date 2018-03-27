import { takeLatest, call, put } from "redux-saga/effects";

import {
  GET_CATALOG_START,
  GET_CATALOG_ERROR,
  GET_CATALOG_SUCCESS,
} from "./actions";

import api from "api";

// -------- Get catalog

function createGetCatalog() {
  return function*(options) {
    // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getPeople(options.id));
      const action = { type: GET_CATALOG_SUCCESS, data };

      yield put(action);
    } catch (error) {
      const action = { type: GET_CATALOG_ERROR, error };

      yield put(action);
    }
  };
}

export const getCatalog = createGetCatalog();

export function* getCatalogWatcher() {
  yield takeLatest(GET_CATALOG_START, getCatalog);
}

export default [getCatalogWatcher()];
