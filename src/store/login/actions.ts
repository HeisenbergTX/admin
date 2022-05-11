import { GET_LOGIN, GET_PASSWORD, GET_TOKENS, POST_LOGIN } from "./types";

export const getLogin = (payload: string) => ({
  type: GET_LOGIN,
  payload,
});

export const getPassword = (payload: string) => ({
  type: GET_PASSWORD,
  payload,
});

export const postLogin = (payload: any) => ({
  type: POST_LOGIN,
  payload,
});

export const getTokens = (payload: any) => ({
  type: GET_TOKENS,
  payload,
});
