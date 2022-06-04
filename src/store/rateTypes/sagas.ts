import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchRateTypeSuccess, FetchRateTypeError } from "./actions";
import { FETCH_RATE_TYPE_REQUEST } from "./types";
const urlAddress = "https://api-factory.simbirsoft1.com/api/db/rateType/";

const getRateTypes = () => {
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
export default RateTypeSagaWatcher;
