import {
  GET_STATUS_MODELS,
  GET_STATUS_CATEGORY,
  GET_STATUS_ORDERS,
  GET_STATUS_RATES,
  GET_STATUS_RATE_TYPES,
  GET_STATUS_PUT_ORDERS,
} from "./types";

interface IState {
  statusModel?: number;
  statusOrder?: number;
  statusCategory?: number;
  statusRate?: number;
  statusRateType?: number;
  statusPutOrder?: number;
}

const initialState: IState = {};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case GET_STATUS_MODELS:
      return {
        ...state,
        statusModel: payload,
      };
    case GET_STATUS_ORDERS:
      return {
        ...state,
        statusOrder: payload,
      };
    case GET_STATUS_CATEGORY:
      return {
        ...state,
        statusCategory: payload,
      };
    case GET_STATUS_RATES:
      return {
        ...state,
        statusRate: payload,
      };
    case GET_STATUS_RATE_TYPES:
      return {
        ...state,
        statusRateType: payload,
      };
    case GET_STATUS_PUT_ORDERS:
      return {
        ...state,
        statusPutOrder: payload,
      };
    default:
      return state;
  }
};
