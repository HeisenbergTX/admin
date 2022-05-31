import {
  FETCH_RATE_REQUEST,
  FETCH_RATE_SUCCESS,
  FETCH_RATE_ERROR,
} from "./types";

interface IState {
  pending: boolean;
  rates: any;
  error: string | null;
}

const initialState: IState = {
  pending: false,
  rates: [],
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_RATE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_RATE_SUCCESS:
      return {
        ...state,
        pending: false,
        rates: payload.rates,
      };

    case FETCH_RATE_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
