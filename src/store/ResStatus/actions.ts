import {
  GET_STATUS_MODELS,
  GET_STATUS_CATEGORY,
  GET_STATUS_ORDERS,
  GET_STATUS_RATES,
  GET_STATUS_RATE_TYPES,
  GET_STATUS_PUT_ORDERS,
} from "./types";

export const chooseStatusModel = (status: number | undefined) => ({
  type: GET_STATUS_MODELS,
  payload: { status },
});

export const chooseStatusCategory = (status: number | undefined) => ({
  type: GET_STATUS_CATEGORY,
  payload: { status },
});

export const chooseStatusOrder = (status: number | undefined) => ({
  type: GET_STATUS_ORDERS,
  payload: { status },
});

export const chooseStatusPutOrder = (status: number | undefined) => ({
  type: GET_STATUS_PUT_ORDERS,
  payload: { status },
});

export const chooseStatusRate = (status: number | undefined) => ({
  type: GET_STATUS_RATES,
  payload: { status },
});

export const chooseStatusRateType = (status: number | undefined) => ({
  type: GET_STATUS_RATE_TYPES,
  payload: { status },
});
