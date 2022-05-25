import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  GET_CATEGORY_NAME,
} from "./types";

export const FetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const FetchCategorySuccess = (payload: any) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload,
});

export const GetCategoryName = (payload: string) => ({
  type: GET_CATEGORY_NAME,
  payload,
});

export const FetchCategoryError = (payload: any) => ({
  type: FETCH_CATEGORY_ERROR,
});
