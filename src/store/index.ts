import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

const SagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(rootSaga);

export default store;
