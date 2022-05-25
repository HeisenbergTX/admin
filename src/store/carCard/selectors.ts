import { RootState } from "../rootReducer";

export const getDefaultCarCard = (state: RootState) =>
  state?.carCard?.defaultCarCard;

export const getChangeCarCard = (state: RootState) =>
  state?.carCard?.changeCarCard;
