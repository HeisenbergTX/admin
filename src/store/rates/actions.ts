import { IRate } from "../interfaces";
import {
  FETCH_RATE_REQUEST,
  FETCH_RATE_SUCCESS,
  FETCH_RATE_ERROR,
  CHANGE_RATE,
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

export const changeRate = (payload: IRate | string) => ({
  type: CHANGE_RATE,
  payload,
});
