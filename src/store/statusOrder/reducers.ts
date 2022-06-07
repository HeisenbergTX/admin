import {
  FETCH_REQUEST_STATUS_ORDER,
  FETCH_SUCCESS_STATUS_ORDER,
  FETCH_ERROR_STATUS_ORDER,
} from "./types";

interface IState {
  pending: boolean;
  statuses: string[];
  error: null | string;
}

const initialState: IState = {
  pending: false,
  statuses: [],
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_REQUEST_STATUS_ORDER:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SUCCESS_STATUS_ORDER:
      return {
        ...state,
        pending: false,
        statuses: payload,
      };

    case FETCH_ERROR_STATUS_ORDER:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
