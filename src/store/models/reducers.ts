import { IModels } from "./../interfaces";
import {
  COUNT_MODELS,
  FETCH_MODELS_REQUEST,
  FETCH_MODELS_SUCCESS,
  CHOOSE_PAGE_ACTIVE,
  FETCH_MODELS_ERROR,
} from "./types";

interface IState {
  countModels: number;
  pending: boolean;
  models: IModels[];
  pageActive: number;
  error: null | string;
}

const initialState: IState = {
  countModels: 0,
  pending: false,
  models: [],
  pageActive: 1,
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case COUNT_MODELS:
      return {
        ...state,
        countModels: payload,
      };
    case FETCH_MODELS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MODELS_SUCCESS:
      return {
        ...state,
        pending: false,
        models: payload.models,
      };
    case CHOOSE_PAGE_ACTIVE:
      return {
        ...state,
        pageActive: payload,
      };
    case FETCH_MODELS_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
