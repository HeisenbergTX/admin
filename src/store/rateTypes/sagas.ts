import { instance } from "./../../api/index";
import { call, put, takeLatest } from "redux-saga/effects";
import { FetchRateTypeSuccess, FetchRateTypeError } from "./actions";
import {
  DELETE_RATE_TYPE,
  FETCH_RATE_TYPE_REQUEST,
  POST_RATE_TYPE,
  PUT_RATE_TYPE,
} from "./types";
import { ResGenerator } from "../interfaces";
import { chooseStatusRateType } from "../ResStatus/actions";

const getRateTypes = () => instance.get("rateType/");

const putRateType = (payload: any) =>
  instance.put(`rateType/${payload.rateType.id}`, {
    ...payload.rateType,
  });

const postRateType = (payload: any) =>
  instance.post("rateType/", {
    ...payload.rateType,
  });

const deleteRateType = (payload: any) =>
  instance.delete(`rateType/${payload.id}`);

function* RateTypeSagaWorker() {
  try {
    const res: ResGenerator = yield call(getRateTypes);
    yield put(chooseStatusRateType(res.status));
    yield put(
      FetchRateTypeSuccess({
        rateTypes: res.data.data,
      })
    );
  } catch (e: any) {
    yield put(chooseStatusRateType(e.response.status));
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
    yield put(chooseStatusRateType(res.status));
    if (res.status === 200) {
      yield RateTypeSagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusRateType(e.response.status));

    FetchRateTypeError(e);
  }
}

export function* PutRateTypeSagaWatcher() {
  yield takeLatest(PUT_RATE_TYPE, PutRateTypeSagaWorker);
}

function* PostRateTypeSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(postRateType, payload);
    yield put(chooseStatusRateType(res.status));
    if (res.status === 200) {
      yield RateTypeSagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusRateType(e.response.status));
    FetchRateTypeError(e);
  }
}

export function* PostRateTypeSagaWatcher() {
  yield takeLatest(POST_RATE_TYPE, PostRateTypeSagaWorker);
}

function* DeleteRateTypeSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(deleteRateType, payload);
    yield put(chooseStatusRateType(res.status));
    if (res.status === 200) {
      yield RateTypeSagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusRateType(e.response.status));
    FetchRateTypeError(e);
  }
}

export function* DeleteRateTypeSagaWatcher() {
  yield takeLatest(DELETE_RATE_TYPE, DeleteRateTypeSagaWorker);
}

export default RateTypeSagaWatcher;
