import {
  OPEN_SIDE_BAR,
  OPEN_FILTER_ORDER,
  OPEN_FILTER_MODEL,
  OPEN_CATEGORY_MODAL,
  OPEN_RATE_MODAL,
} from "./types";

interface IState {
  openSideBar: boolean;
  openFilterOrder: boolean;
  openFilterModel: boolean;
  openCategoryModal: boolean;
  openRateModal: boolean;
}

const initialState: IState = {
  openSideBar: false,
  openFilterOrder: false,
  openFilterModel: false,
  openCategoryModal: false,
  openRateModal: false,
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case OPEN_SIDE_BAR:
      return {
        ...state,
        openSideBar: payload,
      };
    case OPEN_FILTER_ORDER:
      return {
        ...state,
        openFilterOrder: payload,
      };
    case OPEN_FILTER_MODEL:
      return {
        ...state,
        openFilterModel: payload,
      };
    case OPEN_CATEGORY_MODAL:
      return {
        ...state,
        openCategoryModal: payload,
      };
    case OPEN_RATE_MODAL:
      return {
        ...state,
        openRateModal: payload,
      };
    default:
      return state;
  }
};
