import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchCategorySuccess, FetchCategoryError } from "./actions";
import { FETCH_CATEGORY_REQUEST } from "./types";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/category";

const getCategory = () =>
  axios.get(urlAddress, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
    },
  });

interface ResGenerator {
  data?: any;
  headers?: string;
  request?: any;
  status?: number;
  statusText?: string;
}

function* CategorySagaWorker() {
  try {
    const res: ResGenerator = yield call(getCategory);
    yield put(
      FetchCategorySuccess({
        categories: res.data.data,
      })
    );
  } catch (e: any) {
    FetchCategoryError({
      error: e.message,
    });
  }
}

function* CategorySagaWatcher() {
  yield takeLatest(FETCH_CATEGORY_REQUEST, CategorySagaWorker);
}
export default CategorySagaWatcher;
