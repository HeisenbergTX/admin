import { all, fork } from "redux-saga/effects";

import login from "./login/sagas";
import models from "./models/sagas";
import categories from "./categories/sagas";

export function* rootSaga() {
  yield all([fork(login), fork(models), fork(categories)]);
}
