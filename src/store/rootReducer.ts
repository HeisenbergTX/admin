import { combineReducers } from "redux";

import login from "./login/reducers";
import modalWindows from "./modalWindows/reducers";
import models from "./models/reducers";
import categories from "./categories/reducers";
import carCard from "./carCard/reducers";
import orders from "./orders/reducers";
import cities from "./cities/reducers";
import rates from "./rates/reducers";
import rateTypes from "./rateTypes/reducers";
import status from "./ResStatus/reducers";
import statuses from "./statusOrder/reducers";

const rootReducer = combineReducers({
  login,
  modalWindows,
  models,
  categories,
  carCard,
  orders,
  cities,
  rates,
  rateTypes,
  status,
  statuses,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
