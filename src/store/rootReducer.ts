import { combineReducers } from "redux";

import login from "./login/reducers";
import modalWindows from "./modalWindows/reducers";
import models from "./models/reducers";
import categories from "./categories/reducers";
import carCard from "./carCard/reducers";

const rootReducer = combineReducers({
  login,
  modalWindows,
  models,
  categories,
  carCard,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
