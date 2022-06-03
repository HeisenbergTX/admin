import { IOrders } from "../interfaces";
import {
  COUNT_ORDERS,
  CHOOSE_PAGE_ACTIVE,
  FETCH_REQUEST_ORDERS,
  FETCH_SUCCESS_ORDERS,
  FETCH_ERROR_ORDERS,
  FILTER_RATE_ID,
  FILTER_CITY_ID,
  CHANGE_ORDER,
} from "./types";

interface IState {
  countOrders: number;
  pageActive: number;
  pending: boolean;
  orders: any;
  cityId: {
    name: string;
    id: string | undefined;
  };
  rateId: {
    name: string;
    id: string | undefined;
  };
  valueOrder?: IOrders;
  error: string | null;
}

const initialState: IState = {
  countOrders: 0,
  pageActive: 1,
  pending: false,
  orders: [],
  cityId: {
    name: "Любой",
    id: undefined,
  },
  rateId: {
    name: "Любой",
    id: undefined,
  },
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case COUNT_ORDERS:
      return {
        ...state,
        countOrders: payload,
      };
    case CHOOSE_PAGE_ACTIVE:
      return {
        ...state,
        pageActive: payload,
      };
    case FETCH_REQUEST_ORDERS:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SUCCESS_ORDERS:
      return {
        ...state,
        pending: false,
        orders: payload.orders,
      };
    case FILTER_RATE_ID:
      return {
        ...state,
        rateId: payload,
      };
    case FILTER_CITY_ID:
      return {
        ...state,
        cityId: payload,
      };
    case FETCH_ERROR_ORDERS:
      return {
        ...state,
        error: payload,
      };
    case CHANGE_ORDER:
      return {
        ...state,
        valueOrder: payload,
      };
    default:
      return state;
  }
};
