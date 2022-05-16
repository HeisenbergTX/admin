import { OPEN_SIDE_BAR } from "./types";

interface IState {
  openSideBar: boolean;
}

const initialState: IState = {
  openSideBar: false,
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
    default:
      return state;
  }
};
