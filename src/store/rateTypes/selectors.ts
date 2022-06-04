import { RootState } from "../rootReducer";

export const getPendingRateType = (state: RootState) => state.rateTypes.pending;

export const getRateTypes = (state: RootState) => state.rateTypes.rateTypes;

export const getErrorRateType = (state: RootState) => state.rateTypes.error;

export const getValueRateType = (state: RootState) =>
  state.rateTypes.valueRateType;
