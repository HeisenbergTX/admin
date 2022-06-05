import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchRateSuccess, FetchRateError } from "./actions";
import { DELETE_RATE, FETCH_RATE_REQUEST, POST_RATE, PUT_RATE } from "./types";
import { ResGenerator } from "../interfaces";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/rate/";

const getRates = () => {
  return axios.get(urlAddress, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
    },
  });
};

const putRate = (payload: any) => {
  return axios.put(
    `${urlAddress}${payload.id}`,
    {
      ...payload.rateUpdate,
    },
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${payload?.token}`,
      },
    }
  );
};

const postRate = (payload: any) => {
  return axios.post(
    urlAddress,
    {
      ...payload.rateUpdate,
    },
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${payload?.token}`,
      },
    }
  );
};

const deleteRate = (payload: any) => {
  return axios.delete(`${urlAddress}${payload.id}`, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
      Authorization: `Bearer ${payload?.token}`,
    },
  });
};

function* RateSagaWorker() {
  try {
    const res: ResGenerator = yield call(getRates);
    yield put(
      FetchRateSuccess({
        rates: res.data.data,
      })
    );
  } catch (e: any) {
    FetchRateError({
      error: e,
    });
  }
}

function* RateSagaWatcher() {
  yield takeLatest(FETCH_RATE_REQUEST, RateSagaWorker);
}

function* PutRateSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(putRate, payload);
    if (res.status === 200) {
      yield RateSagaWorker();
    }
  } catch (e: any) {
    FetchRateError(e);
  }
}

export function* PutRateSagaWatcher() {
  yield takeLatest(PUT_RATE, PutRateSagaWorker);
}

function* PostRateSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(postRate, payload);
    if (res.status === 200) {
      yield RateSagaWorker();
    }
  } catch (e: any) {
    FetchRateError(e);
  }
}

export function* PostRateSagaWatcher() {
  yield takeLatest(POST_RATE, PostRateSagaWorker);
}

function* DeleteRateSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(deleteRate, payload);
    if (res.status === 200) {
      yield RateSagaWorker();
    }
  } catch (e: any) {
    FetchRateError(e);
  }
}

export function* DeleteRateSagaWatcher() {
  yield takeLatest(DELETE_RATE, DeleteRateSagaWorker);
}

export default RateSagaWatcher;
