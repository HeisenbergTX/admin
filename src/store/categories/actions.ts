import { ICategory } from "./../interfaces";
import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  GET_CATEGORY_NAME,
  CHANGE_CATEGORY,
  POST_CATEGORY,
  PUT_CATEGORY,
  DELETE_CATEGORY,
} from "./types";

export const FetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const FetchCategorySuccess = (payload: any) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload,
});

export const GetCategoryName = (name: string, id: string | undefined) => ({
  type: GET_CATEGORY_NAME,
  payload: {
    name,
    id,
  },
});

export const changeCategory = (
  id: string,
  name: string,
  description: string
) => ({
  type: CHANGE_CATEGORY,
  payload: {
    id,
    name,
    description,
  },
});

export const FetchCategoryError = (payload: any) => ({
  type: FETCH_CATEGORY_ERROR,
  payload,
});

export const PutCategory = (category: ICategory) => ({
  type: PUT_CATEGORY,
  payload: {
    category,
  },
});

export const PostCategory = (category: ICategory) => ({
  type: POST_CATEGORY,
  payload: {
    category,
  },
});

export const DeleteCategory = (id: string) => ({
  type: DELETE_CATEGORY,
  payload: {
    id,
  },
});
