import { RootState } from "../rootReducer";

export const getOrderStatusPending = (state: RootState) =>
  state.statuses.pending;

export const getStatuses = (state: RootState) => state.statuses.statuses;

export const getOrderStatusError = (state: RootState) => state.statuses.error;
