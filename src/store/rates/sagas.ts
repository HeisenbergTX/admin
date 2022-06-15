import { call, put, takeLatest } from "redux-saga/effects";
import { FetchRateSuccess, FetchRateError } from "./actions";
import { DELETE_RATE, FETCH_RATE_REQUEST, POST_RATE, PUT_RATE } from "./types";
import { ResGenerator } from "../interfaces";
import { chooseStatusRate } from "../ResStatus/actions";
import { instance } from "../../api";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/rate/";

const getRates = () => instance.get("rate/");

const putRate = (payload: any) =>
  instance.put(`rate/${payload.id}`, {
    ...payload.rateUpdate,
  });

const postRate = (payload: any) =>
  instance.post("rate/", {
    ...payload.rateUpdate,
  });

const deleteRate = (payload: any) => instance.delete(`rate/${payload.id}`);

function* RateSagaWorker() {
  try {
    const res: ResGenerator = yield call(getRates);
    yield put(chooseStatusRate(res.status));
    yield put(
      FetchRateSuccess({
        rates: res.data.data,
      })
    );
  } catch (e: any) {
    yield put(chooseStatusRate(e.response.status));
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
    yield put(chooseStatusRate(res.status));
    if (res.status === 200) {
      yield RateSagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusRate(e.response.status));
    FetchRateError(e);
  }
}

export function* PutRateSagaWatcher() {
  yield takeLatest(PUT_RATE, PutRateSagaWorker);
}

function* PostRateSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(postRate, payload);
    yield put(chooseStatusRate(res.status));
    if (res.status === 200) {
      yield RateSagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusRate(e.response.status));
    FetchRateError(e);
  }
}

export function* PostRateSagaWatcher() {
  yield takeLatest(POST_RATE, PostRateSagaWorker);
}

function* DeleteRateSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(deleteRate, payload);
    yield put(chooseStatusRate(res.status));
    if (res.status === 200) {
      yield RateSagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusRate(e.response.status));
    FetchRateError(e);
  }
}

export function* DeleteRateSagaWatcher() {
  yield takeLatest(DELETE_RATE, DeleteRateSagaWorker);
}

export default RateSagaWatcher;
