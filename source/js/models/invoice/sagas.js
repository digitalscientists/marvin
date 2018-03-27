import { takeLatest, call, put } from "redux-saga/effects";

import {
  GET_INVOICE_START,
  GET_INVOICE_ERROR,
  GET_INVOICE_SUCCESS,
} from "./actions";

import api from "api";

// -------- Get invoice

function createGetInvoice() {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getInvoice(options.id));
      const action = { type: GET_INVOICE_SUCCESS, data };

      yield put(action);
    } catch (error) {
      const action = { type: GET_INVOICE_ERROR, error };

      yield put(action);
    }
  };
}

export const getInvoice = createGetInvoice();

export function* getInvoiceWatcher() {
  yield takeLatest(GET_INVOICE_START, getInvoice);
}


export default [
  getInvoiceWatcher(),
]