import { call, put, takeLatest } from "redux-saga/effects";
import { instance } from "../../api";

import { FetchSuccessCities, FetchErrorCities } from "./actions";
import { FETCH_REQUEST_CITIES } from "./types";
import { ResGenerator } from "../interfaces";

const getCities = () => instance.get("city");

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
