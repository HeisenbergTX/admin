import { IOrders } from "./../interfaces";
import {
  COUNT_ORDERS,
  CHOOSE_PAGE_ACTIVE,
  FETCH_REQUEST_ORDERS,
  FETCH_SUCCESS_ORDERS,
  FETCH_ERROR_ORDERS,
  FILTER_CITY_ID,
  FILTER_RATE_ID,
  CHANGE_ORDER,
  DELETE_ORDER,
  PUT_ORDER,
} from "./types";

export const CountOrders = (payload: number) => ({
  type: COUNT_ORDERS,
  payload,
});

export const ChoosePageActive = (payload: number) => ({
  type: CHOOSE_PAGE_ACTIVE,
  payload,
});

export const FethcRequestOrders = (
  page: number,
  token: any,
  cityId: string | undefined,
  rateId: string | undefined
) => ({
  type: FETCH_REQUEST_ORDERS,
  payload: {
    page,
    token,
    cityId,
    rateId,
  },
});

export const chooseCityId = (name: string, id: string | undefined) => ({
  type: FILTER_CITY_ID,
  payload: {
    name,
    id,
  },
});

export const chooseRateId = (name: string, id: string | undefined) => ({
  type: FILTER_RATE_ID,
  payload: {
    name,
    id,
  },
});

export const FethcSuccessOrders = (payload: any) => ({
  type: FETCH_SUCCESS_ORDERS,
  payload,
});

export const FethcErrorOrders = (payload: any) => ({
  type: FETCH_ERROR_ORDERS,
  payload,
});

export const changeOrder = (payload: IOrders | undefined) => ({
  type: CHANGE_ORDER,
  payload,
});

export const PutOrder = (order: any, id: string, token: string) => ({
  type: PUT_ORDER,
  payload: {
    order,
    id,
    token,
  },
});

export const DeleteOrder = (id: string, token: string) => ({
  type: DELETE_ORDER,
  payload: {
    id,
    token,
  },
});
