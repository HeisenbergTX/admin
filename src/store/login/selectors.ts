import { RootState } from "../rootReducer";

export const getLoginData = (state: RootState) => state.login;

export const pullTokens = (state: RootState) => state.login.tokens;
