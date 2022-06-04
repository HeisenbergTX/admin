import { IRateTypes } from "../interfaces";
import {
  FETCH_RATE_TYPE_REQUEST,
  FETCH_RATE_TYPE_SUCCESS,
  FETCH_RATE_TYPE_ERROR,
  CHANGE_RATE_TYPE,
} from "./types";

export const FetchRateTypeRequest = () => ({
  type: FETCH_RATE_TYPE_REQUEST,
});

export const FetchRateTypeSuccess = (payload: any) => ({
  type: FETCH_RATE_TYPE_SUCCESS,
  payload,
});

export const FetchRateTypeError = (payload: any) => ({
  type: FETCH_RATE_TYPE_ERROR,
  payload,
});

export const changeRateType = (payload: IRateTypes | undefined) => ({
  type: CHANGE_RATE_TYPE,
  payload,
});
