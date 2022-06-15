import { call, put, takeLatest } from "redux-saga/effects";
import { CountModels, FetchModelsSuccess, FetchModelsError } from "./actions";
import { FETCH_MODELS_REQUEST } from "./types";
import { ResGenerator } from "../interfaces";
import { chooseStatusModel } from "../ResStatus/actions";
import { instance } from "../../api";
const urlAddress = "https://api-factory.simbirsoft1.com/api/db/car/";

const getModels = (payload: any) =>
  instance.get(
    `car?limit=10&page=${payload.page - 1}${
      payload.id === undefined ? "" : `&categoryId=${payload.id}`
    }`
  );

function* ModelSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(getModels, payload);
    yield put(chooseStatusModel(res.status));
    yield put(CountModels(res.data.count));
    yield put(
      FetchModelsSuccess({
        models: res.data.data,
      })
    );
  } catch (e: any) {
    yield put(chooseStatusModel(e.response.status));
    FetchModelsError({
      error: e.message,
    });
  }
}

function* ModelSagaWatcher() {
  yield takeLatest(FETCH_MODELS_REQUEST, ModelSagaWorker);
}
export default ModelSagaWatcher;
