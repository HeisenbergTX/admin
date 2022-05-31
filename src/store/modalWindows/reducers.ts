import { OPEN_SIDE_BAR, OPEN_FILTER_ORDER, OPEN_FILTER_MODEL } from "./types";

interface IState {
  openSideBar: boolean;
  openFilterOrder: boolean;
  openFilterModel: boolean;
}

const initialState: IState = {
  openSideBar: false,
  openFilterOrder: false,
  openFilterModel: false,
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
    default:
      return state;
  }
};
