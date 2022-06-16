import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { CountOrders, FethcSuccessOrders, FethcErrorOrders } from "./actions";
import { DELETE_ORDER, FETCH_REQUEST_ORDERS, PUT_ORDER } from "./types";
import { ResGenerator } from "../interfaces";
import { chooseStatusOrder, chooseStatusPutOrder } from "../ResStatus/actions";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/order/";

const getOrders = (payload: any) =>
  axios.get(
    `${urlAddress}?limit=5&page=${
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

const putOrder = (payload: any) => {
  return axios.put(
    `${urlAddress}${payload.id}`,
    {
      ...payload.order,
    },
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${payload?.token}`,
      },
    }
  );
};

const deleteOrder = (payload: any) => {
  return axios.delete(`${urlAddress}${payload.id}`, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
      Authorization: `Bearer ${payload?.token}`,
    },
  });
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

function* PutOrderSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(putOrder, payload);
    chooseStatusPutOrder(res.status);
  } catch (e: any) {
    yield put(chooseStatusOrder(e.response.status));
    FethcErrorOrders(e);
  }
}

export function* PutOrderSagaWatcher() {
  yield takeLatest(PUT_ORDER, PutOrderSagaWorker);
}

function* DeleteOrderSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(deleteOrder, payload);
    yield put(chooseStatusOrder(res.status));
  } catch (e: any) {
    yield put(chooseStatusOrder(e.response.status));
    FethcErrorOrders(e);
  }
}

export function* DeleteOrderSagaWatcher() {
  yield takeLatest(DELETE_ORDER, DeleteOrderSagaWorker);
}

export default OrderSagaWatcher;
