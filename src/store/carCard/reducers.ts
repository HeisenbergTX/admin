import { IModels } from "../interfaces";
import {
  CHOOSE_DEFAULT_CAR_CARD,
  CHOOSE_CHANGE_CAR_CARD,
  CHANGE_CAR_CATEGORY,
  CHANGE_CAR_DESCRIPTION,
  CHANGE_CAR_NAME,
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
    case CHANGE_CAR_CATEGORY: {
      return {
        ...state,
        changeCarCard: {
          ...state.changeCarCard,
          categoryId: payload,
        },
      };
    }
    case CHANGE_CAR_DESCRIPTION: {
      return {
        ...state,
        changeCarCard: {
          ...state.changeCarCard,
          description: payload?.description,
        },
      };
    }
    case CHANGE_CAR_NAME: {
      return {
        ...state,
        changeCarCard: {
          ...state.changeCarCard,
          name: payload?.name,
        },
      };
    }
    default:
      return state;
  }
};
