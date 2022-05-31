import {
  FETCH_RATE_REQUEST,
  FETCH_RATE_SUCCESS,
  FETCH_RATE_ERROR,
} from "./types";

export const FetchRateRequest = () => ({
  type: FETCH_RATE_REQUEST,
});

export const FetchRateSuccess = (payload: any) => ({
  type: FETCH_RATE_SUCCESS,
  payload,
});

export const FetchRateError = (payload: any) => ({
  type: FETCH_RATE_ERROR,
  payload,
});
