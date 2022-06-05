import { IModels } from "./../interfaces";
import { CHOOSE_DEFAULT_CAR_CARD, CHOOSE_CHANGE_CAR_CARD } from "./types";

export const chooseDefaultCarCard = (payload: IModels) => ({
  type: CHOOSE_DEFAULT_CAR_CARD,
  payload,
});

export const chooseChangeCarCard = (payload: IModels) => ({
  type: CHOOSE_CHANGE_CAR_CARD,
  payload,
});
