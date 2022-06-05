import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { CountOrders, FethcSuccessOrders, FethcErrorOrders } from "./actions";
import { FETCH_REQUEST_ORDERS } from "./types";
import { ResGenerator } from "../interfaces";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/order";

const getOrders = (payload: any) =>
  axios.get(
    `${urlAddress}?limit=1&page=${
      payload.page === 0 ? payload.page : payload.page - 1
    }${payload.cityId.id ? `&cityId=${payload.cityId.id}` : ""}${
      payload.rateId.id ? `&rateId=${payload.rateId.id}` : ""
    }`,
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${payload?.token}`,
      },
    }
  );

function* OrderSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(getOrders, payload);
    yield put(CountOrders(res.data.count));
    yield put(
      FethcSuccessOrders({
        orders: res.data.data,
      })
    );
  } catch (e: any) {
    FethcErrorOrders({
      error: e,
    });
  }
}

function* OrderSagaWatcher() {
  yield takeLatest(FETCH_REQUEST_ORDERS, OrderSagaWorker);
}
export default OrderSagaWatcher;
