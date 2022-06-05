import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { CountModels, FetchModelsSuccess, FetchModelsError } from "./actions";
import { FETCH_MODELS_REQUEST } from "./types";
import { ResGenerator } from "../interfaces";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/car/";

const getModels = (payload: any) => {
  return axios.get(
    `${urlAddress}?limit=10&page=${payload.page - 1}${
      payload.id === undefined ? "" : `&categoryId=${payload.id}`
    }`,
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
};

function* ModelSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(getModels, payload);
    yield put(CountModels(res.data.count));
    yield put(
      FetchModelsSuccess({
        models: res.data.data,
      })
    );
  } catch (e: any) {
    FetchModelsError({
      error: e.message,
    });
  }
}

function* ModelSagaWatcher() {
  yield takeLatest(FETCH_MODELS_REQUEST, ModelSagaWorker);
}
export default ModelSagaWatcher;
