import { combineReducers } from "redux";

import login from "./login/reducers";
import modalWindows from "./modalWindows/reducers";

const rootReducer = combineReducers({ login, modalWindows });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
