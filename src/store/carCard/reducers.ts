import { IModels } from "../interfaces";
import {
  CHOOSE_DEFAULT_CAR_CARD,
  CHOOSE_CHANGE_CAR_CARD,
  EDIT_NAME_CAR,
} from "./types";

interface IState {
  defaultCarCard: IModels | null;
  changeCarCard: IModels | null;
}

const initialState: IState = {
  defaultCarCard: null,
  changeCarCard: null,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case CHOOSE_DEFAULT_CAR_CARD:
      return {
        ...state,
        defaultCarCard: payload,
      };
    case CHOOSE_CHANGE_CAR_CARD:
      return {
        ...state,
        changeCarCard: payload,
      };

    default:
      return state;
  }
};
