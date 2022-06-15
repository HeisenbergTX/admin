import { call, put, takeLatest } from "redux-saga/effects";
import { instance } from "../../api";

import { CountOrders, FethcSuccessOrders, FethcErrorOrders } from "./actions";
import { FETCH_REQUEST_ORDERS } from "./types";
import { ResGenerator } from "../interfaces";
import { chooseStatusOrder } from "../ResStatus/actions";

const getOrders = (payload: any) => {
  return instance.get(
    `/order?limit=1&page=${
      payload.page === 0 ? payload.page : payload.page - 1
    }${payload.cityId.id ? `&cityId=${payload.cityId.id}` : ""}${
      payload.rateId.id ? `&rateId=${payload.rateId.id}` : ""
    }`
  );
};

function* OrderSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(getOrders, payload);
    yield put(chooseStatusOrder(res.status));
    yield put(CountOrders(res.data.count));
    yield put(
      FethcSuccessOrders({
        orders: res.data.data,
      })
    );
  } catch (e: any) {
    yield put(chooseStatusOrder(e.response.status));
    FethcErrorOrders({
      error: e,
    });
  }
}

function* OrderSagaWatcher() {
  yield takeLatest(FETCH_REQUEST_ORDERS, OrderSagaWorker);
}
export default OrderSagaWatcher;
