import { RootState } from "../rootReducer";

export const getCategoryPendng = (state: RootState) => state.categories.pending;

export const getCategories = (state: RootState) => state.categories.categories;

export const getCategoryName = (state: RootState) =>
  state.categories.categoryName;

export const getValueCategory = (state: RootState) =>
  state.categories.changeCategory;

export const getCategoryError = (state: RootState) => state.categories.error;
