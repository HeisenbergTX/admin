import { ICategories, ICategory } from "../interfaces";
import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  GET_CATEGORY_NAME,
  CHANGE_CATEGORY,
} from "./types";

interface IState {
  pending: boolean;
  categories: ICategories[];
  categoryName: {
    name: string;
    id: string | undefined;
  };
  changeCategory: ICategory;
  error: null | string;
}

const initialState: IState = {
  pending: false,
  categories: [],
  categoryName: {
    name: "Все категории",
    id: undefined,
  },
  changeCategory: {
    name: "",
    description: "",
  },
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: payload.categories,
      };
    case GET_CATEGORY_NAME:
      return {
        ...state,
        categoryName: payload,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        changeCategory: payload,
      };
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
