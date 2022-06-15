import { login } from "./../../api/index";
import { getError } from "./actions";
import { POST_LOGIN } from "./types";
import { put, call, takeLatest } from "redux-saga/effects";
import { ResGenerator } from "../interfaces";
import Cookies from "js-cookie";
import { chooseStatusLogin } from "../ResStatus/actions";

const postLogin = (payload: any) =>
  login.post("login", {
    ...payload,
  });

function* PostLoginSagaWorker({ payload }: any) {
  try {
    const res: ResGenerator = yield call(postLogin, payload);
    yield put(chooseStatusLogin(res.status));
    Cookies.set("access_token", res.data.access_token);
    Cookies.set("refresh_token", res.data.refresh_token);
  } catch (e: any) {
    yield put(
      getError({
        code: e.code,
        status: e.response.status,
      })
    );
  }
}

function* PostLoginSagaWatcher() {
  yield takeLatest(POST_LOGIN, PostLoginSagaWorker);
}

export default PostLoginSagaWatcher;
