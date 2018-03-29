import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import invoice from "./invoice/reducers";
import floorplan from "./floorplan/reducers";
import catalog from "./catalog/reducers";

export default combineReducers({
  invoice,
  floorplan,
  catalog,
  router: routerReducer,
});
