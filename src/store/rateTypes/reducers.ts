import { IRateTypes } from "./../interfaces";
import {
  FETCH_RATE_TYPE_REQUEST,
  FETCH_RATE_TYPE_SUCCESS,
  FETCH_RATE_TYPE_ERROR,
  CHANGE_RATE_TYPE,
} from "./types";

interface IState {
  pending: boolean;
  rateTypes: IRateTypes[];
  valueRateType: IRateTypes | string;
  error: string | null;
}

const initialState: IState = {
  pending: false,
  rateTypes: [],
  valueRateType: "",
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_RATE_TYPE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_RATE_TYPE_SUCCESS:
      return {
        ...state,
        pending: false,
        rateTypes: payload.rateTypes,
      };
    case CHANGE_RATE_TYPE:
      return {
        ...state,
        valueRateType: payload,
      };

    case FETCH_RATE_TYPE_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
