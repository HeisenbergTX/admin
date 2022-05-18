import { combineReducers } from "redux";

import login from "./login/reducers";

const rootReducer = combineReducers({ login });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
