import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchRateTypeSuccess, FetchRateTypeError } from "./actions";
import {
  DELETE_RATE_TYPE,
  FETCH_RATE_TYPE_REQUEST,
  POST_RATE_TYPE,
  PUT_RATE_TYPE,
} from "./types";
import { ResGenerator } from "../interfaces";
const urlAddress = "https://api-factory.simbirsoft1.com/api/db/rateType/";

const getRateTypes = () => {
  return axios.get(urlAddress, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
    },
  });
};

const putRateType = (payload: any) => {
  return axios.put(
    `${urlAddress}${payload.rateType.id}`,
    {
      ...payload.rateType,
    },
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${payload?.token}`,
      },
    }
  );
};

const postRateType = (payload: any) => {
  return axios.post(
    urlAddress,
    {
      ...payload.rateType,
    },
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${payload?.token}`,
      },
    }
  );
};

const deleteRateType = (payload: any) => {
  return axios.delete(`${urlAddress}${payload.id}`, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
      Authorization: `Bearer ${payload?.token}`,
    },
  });
};

function* RateTypeSagaWorker() {
  try {
    const res: ResGenerator = yield call(getRateTypes);
    yield put(
      FetchRateTypeSuccess({
        rateTypes: res.data.data,
      })
    );
  } catch (e: any) {
    FetchRateTypeError({
      error: e,
    });
  }
}

function* RateTypeSagaWatcher() {
  yield takeLatest(FETCH_RATE_TYPE_REQUEST, RateTypeSagaWorker);
}

function* PutRateTypeSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(putRateType, payload);
    if (res.status === 200) {
      yield RateTypeSagaWorker();
    }
  } catch (e: any) {
    FetchRateTypeError(e);
  }
}

export function* PutRateTypeSagaWatcher() {
  yield takeLatest(PUT_RATE_TYPE, PutRateTypeSagaWorker);
}

function* PostRateTypeSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(postRateType, payload);
    if (res.status === 200) {
      yield RateTypeSagaWorker();
    }
  } catch (e: any) {
    FetchRateTypeError(e);
  }
}

export function* PostRateTypeSagaWatcher() {
  yield takeLatest(POST_RATE_TYPE, PostRateTypeSagaWorker);
}

function* DeleteRateTypeSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(deleteRateType, payload);
    if (res.status === 200) {
      yield RateTypeSagaWorker();
    }
  } catch (e: any) {
    FetchRateTypeError(e);
  }
}

export function* DeleteRateTypeSagaWatcher() {
  yield takeLatest(DELETE_RATE_TYPE, DeleteRateTypeSagaWorker);
}

export default RateTypeSagaWatcher;
