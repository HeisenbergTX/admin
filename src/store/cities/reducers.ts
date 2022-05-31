import { ICity } from "../interfaces";
import {
  FETCH_REQUEST_CITIES,
  FETCH_SUCCESS_CITIES,
  FETCH_ERROR_CITIES,
  GET_CITY_NAME,
} from "./types";

interface IState {
  pending: boolean;
  cities: ICity[];
  cityName: {
    name: string;
    id: string | undefined;
  };
  error: null | string;
}

const initialState: IState = {
  pending: false,
  cities: [],
  cityName: {
    name: "Любой",
    id: undefined,
  },
  error: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case FETCH_REQUEST_CITIES:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SUCCESS_CITIES:
      return {
        ...state,
        pending: false,
        cities: payload.cities,
      };
    case GET_CITY_NAME:
      return {
        ...state,
        cityName: payload,
      };
    case FETCH_ERROR_CITIES:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
