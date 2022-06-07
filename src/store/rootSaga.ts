import { all, fork } from "redux-saga/effects";

import login from "./login/sagas";
import models from "./models/sagas";
import { AllModelSagaWatcher } from "./models/sagas";
import categories from "./categories/sagas";
import orders from "./orders/sagas";
import cities from "./cities/sagas";
import rates from "./rates/sagas";
import rateTypes from "./rateTypes/sagas";
import {
  PutRateSagaWatcher,
  PostRateSagaWatcher,
  DeleteRateSagaWatcher,
} from "./rates/sagas";
import {
  PostRateTypeSagaWatcher,
  PutRateTypeSagaWatcher,
  DeleteRateTypeSagaWatcher,
} from "./rateTypes/sagas";
import {
  PostCategorySagaWatcher,
  PutCategorySagaWatcher,
  DeleteCategorySagaWatcher,
} from "./categories/sagas";
import {
  PutOrderSagaWatcher,
  DeleteOrderSagaWatcher,
} from "./orders/sagas";
import statuses from "./statusOrder/sagas";

export function* rootSaga() {
  yield all([
    fork(login),
    fork(models),
    fork(categories),
    fork(orders),
    fork(cities),
    fork(rates),
    fork(PutRateSagaWatcher),
    fork(PostRateSagaWatcher),
    fork(DeleteRateSagaWatcher),
    fork(rateTypes),
    fork(PutRateTypeSagaWatcher),
    fork(PostRateTypeSagaWatcher),
    fork(DeleteRateTypeSagaWatcher),
    fork(PostCategorySagaWatcher),
    fork(PutCategorySagaWatcher),
    fork(DeleteCategorySagaWatcher),
    fork(PutOrderSagaWatcher),
    fork(DeleteOrderSagaWatcher),
    fork(AllModelSagaWatcher),
    fork(statuses),
  ]);
}
