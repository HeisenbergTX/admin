import { ICategory, IModels } from "./../interfaces";
import {
  CHOOSE_DEFAULT_CAR_CARD,
  CHOOSE_CHANGE_CAR_CARD,
  CHANGE_CAR_CATEGORY,
  CHANGE_CAR_DESCRIPTION,
  CHANGE_CAR_NAME,
} from "./types";

export const chooseDefaultCarCard = (payload: IModels | undefined) => ({
  type: CHOOSE_DEFAULT_CAR_CARD,
  payload,
});

export const chooseChangeCarCard = (payload: IModels | undefined) => ({
  type: CHOOSE_CHANGE_CAR_CARD,
  payload,
});

export const changeCarCategory = (payload: ICategory) => ({
  type: CHANGE_CAR_CATEGORY,
  payload,
});

export const changeCarDescription = (payload: string) => ({
  type: CHANGE_CAR_DESCRIPTION,
  payload,
});

export const changeCarName = (payload: string) => ({
  type: CHANGE_CAR_NAME,
  payload,
});
