import { takeLatest, call, put } from "redux-saga/effects";

import {
  GET_FLOORPLAN_START,
  GET_FLOORPLAN_ERROR,
  GET_FLOORPLAN_SUCCESS,
} from "./actions";

import api from "api";

// -------- Get floorplan

function createGetFloorplan() {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getFloorplan(options.id));
      const action = { type: GET_FLOORPLAN_SUCCESS, data };

      yield put(action);
    } catch (error) {
      const action = { type: GET_FLOORPLAN_ERROR, error };

      yield put(action);
    }
  };
}

export const getFloorplan = createGetFloorplan();

export function* getFloorplanWatcher() {
  yield takeLatest(GET_FLOORPLAN_START, getFloorplan);
}


export default [
  getFloorplanWatcher(),
]