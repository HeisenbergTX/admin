import {
  FETCH_REQUEST_CITIES,
  FETCH_SUCCESS_CITIES,
  FETCH_ERROR_CITIES,
  GET_CITY_NAME,
} from "./types";

export const FetchRequestCities = () => ({
  type: FETCH_REQUEST_CITIES,
});

export const FetchSuccessCities = (payload: any) => ({
  type: FETCH_SUCCESS_CITIES,
  payload,
});

export const GetCityName = (name: string, id: string | undefined) => ({
  type: GET_CITY_NAME,
  payload: {
    name,
    id,
  },
});

export const FetchErrorCities = (payload: any) => ({
  type: FETCH_ERROR_CITIES,
  payload,
});
