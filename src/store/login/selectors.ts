import { RootState } from "../rootReducer";

export const pullTokens = (state: RootState) => state.login.tokens;

export const getError = (state: RootState) => state.login.error;
