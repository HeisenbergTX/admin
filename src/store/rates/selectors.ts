import { RootState } from "../rootReducer";

export const getPendingRate = (state: RootState) => state.rates.pending;

export const getRates = (state: RootState) => state.rates.rates;

export const getErrorRate = (state: RootState) => state.rates.error;
