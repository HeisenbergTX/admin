import { GET_TOKENS, GET_ERROR } from "./types";

interface IState {
  error: any;
  tokens?: any;
}

const initialState: IState = {
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: string }
) => {
  switch (type) {
    case GET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case GET_TOKENS:
      return {
        ...state,
        tokens: payload,
      };

    default:
      return state;
  }
};
