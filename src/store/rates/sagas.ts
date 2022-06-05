import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchRateSuccess, FetchRateError } from "./actions";
import { FETCH_RATE_REQUEST } from "./types";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/rate";

const getRates = () => {
  return axios.get(urlAddress, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
    },
  });
};

interface ResGenerator {
  data?: any;
  headers?: string;
  request?: any;
  status?: number;
  statusText?: string;
}

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
export default RateSagaWatcher;
