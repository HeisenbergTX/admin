import { RootState } from "../rootReducer";

export const getCityPending = (state: RootState) => state.cities.pending;

export const getCities = (state: RootState) => state.cities.cities;

export const getCityName = (state: RootState) => state.cities.cityName;

export const getCityError = (state: RootState) => state.cities.error;
