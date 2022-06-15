import { IOrders } from "../interfaces";
import {
  COUNT_ORDERS,
  CHOOSE_PAGE_ACTIVE,
  FETCH_REQUEST_ORDERS,
  FETCH_SUCCESS_ORDERS,
  FETCH_ERROR_ORDERS,
  FILTER_CITY_ID,
  FILTER_RATE_ID,
  CHANGE_ORDER,
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
  cityId: string | undefined,
  rateId: string | undefined
) => ({
  type: FETCH_REQUEST_ORDERS,
  payload: {
    page,
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

export const changeOrder = (payload: IOrders) => ({
  type: CHANGE_ORDER,
  payload,
});
