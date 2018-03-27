import { all } from "redux-saga/effects";
import invoiceSagas from "./invoice/sagas";
import floorplanSagas from "./floorplan/sagas";
import catalogSagas from "./catalog/sagas";

export default function* rootSaga() {
  // prettier-ignore
  yield all([
    ...catalogSagas, 
    ...floorplanSagas, 
    ...invoiceSagas,
  ]);
}
