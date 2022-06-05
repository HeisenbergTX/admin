import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchCategorySuccess, FetchCategoryError } from "./actions";
import {
  DELETE_CATEGORY,
  FETCH_CATEGORY_REQUEST,
  POST_CATEGORY,
  PUT_CATEGORY,
} from "./types";
import { ResGenerator } from "../interfaces";
import { chooseStatusCategory } from "../ResStatus/actions";

const urlAddress = "https://api-factory.simbirsoft1.com/api/db/category/";

const getCategory = () =>
  axios.get(urlAddress, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
    },
  });

const putCategory = (payload: any) => {
  return axios.put(
    `${urlAddress}${payload.category.id}`,
    {
      ...payload.category,
    },
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${payload?.token}`,
      },
    }
  );
};

const postCategory = (payload: any) => {
  return axios.post(
    urlAddress,
    {
      ...payload.category,
    },
    {
      headers: {
        "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${payload?.token}`,
      },
    }
  );
};

const deleteCategory = (payload: any) => {
  return axios.delete(`${urlAddress}${payload.id}`, {
    headers: {
      "x-api-factory-application-id": `${process.env.REACT_APP_API_KEY}`,
      Authorization: `Bearer ${payload?.token}`,
    },
  });
};

function* CategorySagaWorker() {
  try {
    const res: ResGenerator = yield call(getCategory);
    yield put(chooseStatusCategory(res.status));
    yield put(
      FetchCategorySuccess({
        categories: res.data.data,
      })
    );
  } catch (e: any) {
    yield put(chooseStatusCategory(e.response.status));
    FetchCategoryError({
      error: e.message,
    });
  }
}

function* CategorySagaWatcher() {
  yield takeLatest(FETCH_CATEGORY_REQUEST, CategorySagaWorker);
}

function* PutCategorySagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(putCategory, payload);

    chooseStatusCategory(res.status);
    if (res.status === 200) {
      yield CategorySagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusCategory(e.response.status));
    FetchCategoryError(e);
  }
}

export function* PutCategorySagaWatcher() {
  yield takeLatest(PUT_CATEGORY, PutCategorySagaWorker);
}

function* PostCategorySagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(postCategory, payload);
    yield put(chooseStatusCategory(res.status));
    if (res.status === 200) {
      yield CategorySagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusCategory(e.response.status));
    FetchCategoryError(e);
  }
}

export function* PostCategorySagaWatcher() {
  yield takeLatest(POST_CATEGORY, PostCategorySagaWorker);
}

function* DeleteCategorySagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(deleteCategory, payload);
    yield put(chooseStatusCategory(res.status));
    if (res.status === 200) {
      yield CategorySagaWorker();
    }
  } catch (e: any) {
    yield put(chooseStatusCategory(e.response.status));
    FetchCategoryError(e);
  }
}

export function* DeleteCategorySagaWatcher() {
  yield takeLatest(DELETE_CATEGORY, DeleteCategorySagaWorker);
}

export default CategorySagaWatcher;
