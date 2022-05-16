import { RootState } from "../rootReducer";

export const getValueSideBar = (state: RootState) =>
  state.modalWindows.openSideBar;
