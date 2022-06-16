import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchSuccessStatusOrder, FetchErrorStatusOrder } from "./actions";
import { FETCH_REQUEST_STATUS_ORDER } from "./types";
import { ResGenerator } from "../interfaces";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/orderStatus";

const getOrderStatus = () => {
  return axios.get(urlAddress, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
    },
  });
};

function* OrderStatusSagaWorker() {
  try {
    const res: ResGenerator = yield call(getOrderStatus);
    yield put(FetchSuccessStatusOrder(res.data.data));
  } catch (e: any) {
    FetchErrorStatusOrder({
      error: e.message,
    });
  }
}

function* OrderStatusSagaWatcher() {
  yield takeLatest(FETCH_REQUEST_STATUS_ORDER, OrderStatusSagaWorker);
}
export default OrderStatusSagaWatcher;
