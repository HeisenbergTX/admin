import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchSuccessCities, FetchErrorCities } from "./actions";
import { FETCH_REQUEST_CITIES } from "./types";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/city";

const getCities = () => {
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

function* CitySagaWorker() {
  try {
    const res: ResGenerator = yield call(getCities);
    yield put(
      FetchSuccessCities({
        cities: res.data.data,
      })
    );
  } catch (e: any) {
    FetchErrorCities({
      error: e.message,
    });
  }
}

function* CitySagaWatcher() {
  yield takeLatest(FETCH_REQUEST_CITIES, CitySagaWorker);
}
export default CitySagaWatcher;
