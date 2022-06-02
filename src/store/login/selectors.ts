import { RootState } from "../rootReducer";

export const pullTokens = (state: RootState) => state.login.tokens;
