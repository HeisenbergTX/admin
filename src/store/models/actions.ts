import {
  FETCH_MODELS_REQUEST,
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS_ERROR,
  CHOOSE_PAGE_ACTIVE,
  COUNT_MODELS,
} from "./types";

export const CountModels = (payload: number) => ({
  type: COUNT_MODELS,
  payload,
});

export const FetchModelsRequest = (payload: number) => ({
  type: FETCH_MODELS_REQUEST,
  payload,
});

export const FetchModelsSuccess = (payload: any) => ({
  type: FETCH_MODELS_SUCCESS,
  payload,
});

export const ChoosePageActive = (payload: number) => ({
  type: CHOOSE_PAGE_ACTIVE,
  payload,
});

export const FetchModelsError = (payload: any) => ({
  type: FETCH_MODELS_ERROR,
});
