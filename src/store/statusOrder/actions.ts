import {
  FETCH_REQUEST_STATUS_ORDER,
  FETCH_SUCCESS_STATUS_ORDER,
  FETCH_ERROR_STATUS_ORDER,
} from "./types";

export const FetchRequestStatusOrder = () => ({
  type: FETCH_REQUEST_STATUS_ORDER,
});

export const FetchSuccessStatusOrder = (payload: any) => ({
  type: FETCH_SUCCESS_STATUS_ORDER,
  payload,
});

export const FetchErrorStatusOrder = (payload: any) => ({
  type: FETCH_ERROR_STATUS_ORDER,
  payload,
});

