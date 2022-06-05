import { all, fork } from "redux-saga/effects";

import login from "./login/sagas";
import models from "./models/sagas";
import categories from "./categories/sagas";
import orders from "./orders/sagas";
import cities from "./cities/sagas";
import rates from "./rates/sagas";
import rateTypes from "./rateTypes/sagas";

export function* rootSaga() {
  yield all([
    fork(login),
    fork(models),
    fork(categories),
    fork(orders),
    fork(cities),
    fork(rates),
    fork(rateTypes),
  ]);
}
