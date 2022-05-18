import { all, fork } from "redux-saga/effects";

import login from "./login/sagas";

export function* rootSaga() {
  yield all([fork(login)]);
}
