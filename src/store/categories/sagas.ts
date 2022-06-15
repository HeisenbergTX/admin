import { call, put, takeLatest } from "redux-saga/effects";
import { FetchCategorySuccess, FetchCategoryError } from "./actions";
import {
  DELETE_CATEGORY,
  FETCH_CATEGORY_REQUEST,
  POST_CATEGORY,
  PUT_CATEGORY,
} from "./types";
import { ResGenerator } from "../interfaces";
import { chooseStatusCategory } from "../ResStatus/actions";
import { instance } from "../../api";

const getCategory = () => instance.get("/category/");

const putCategory = (payload: any) =>
  instance.put(`/category/${payload.category.id}`, {
    ...payload.category,
  });

const postCategory = (payload: any) =>
  instance.post(`/category/${payload.category.id}`, {
    ...payload.category,
  });

const deleteCategory = (payload: any) =>
  instance.delete(`/category/${payload.category.id}`, {
    ...payload.category,
  });

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
