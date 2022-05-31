import { RootState } from "../rootReducer";

export const getValueSideBar = (state: RootState) =>
  state.modalWindows.openSideBar;

export const getValueFilterOrder = (state: RootState) =>
  state.modalWindows.openFilterOrder;

export const getValueFilterModel = (state: RootState) =>
  state.modalWindows.openFilterModel;
