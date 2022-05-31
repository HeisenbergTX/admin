import { GET_LOGIN, GET_PASSWORD, GET_TOKENS, GET_ERROR } from "./types";

interface IState {
  username: string;
  password: string;
  error: any;
  tokens?: any;
}

const initialState: IState = {
  username: "",
  password: "",
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: string }
) => {
  switch (type) {
    case GET_LOGIN:
      return {
        ...state,
        username: payload,
      };
    case GET_PASSWORD:
      return {
        ...state,
        password: payload,
      };

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
