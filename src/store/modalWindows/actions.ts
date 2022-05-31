import { OPEN_SIDE_BAR, OPEN_FILTER_ORDER, OPEN_FILTER_MODEL } from "./types";

export const openSideBar = (payload: boolean) => ({
  type: OPEN_SIDE_BAR,
  payload,
});

export const toogleFilterOrder = (payload: boolean) => ({
  type: OPEN_FILTER_ORDER,
  payload,
});

export const toogleFilterModel = (payload: boolean) => ({
  type: OPEN_FILTER_MODEL,
  payload,
});
