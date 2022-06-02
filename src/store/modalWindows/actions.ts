import {
  OPEN_SIDE_BAR,
  OPEN_FILTER_ORDER,
  OPEN_FILTER_MODEL,
  OPEN_CATEGORY_MODAL,
  OPEN_RATE_MODAL,
} from "./types";

export const openSideBar = (payload: boolean) => ({
  type: OPEN_SIDE_BAR,
  payload,
});

export const toggleFilterOrder = (payload: boolean) => ({
  type: OPEN_FILTER_ORDER,
  payload,
});

export const toggleFilterModel = (payload: boolean) => ({
  type: OPEN_FILTER_MODEL,
  payload,
});

export const toggleCategoryModal = (payload: boolean) => ({
  type: OPEN_CATEGORY_MODAL,
  payload,
});

export const toggleRateModal = (payload: boolean) => ({
  type: OPEN_RATE_MODAL,
  payload,
});
