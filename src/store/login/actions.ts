import { GET_ERROR, GET_TOKENS, POST_LOGIN } from "./types";

export const postLogin = (payload: any) => ({
  type: POST_LOGIN,
  payload,
});

export const getError = (payload: any) => ({
  type: GET_ERROR,
  payload,
});

export const getTokens = (payload: any) => ({
  type: GET_TOKENS,
  payload,
});
